import os
import re

def rebuild_files_from_data(data_file='data.txt', base_dir='.'):
    """
    Reconstructs files from a text file containing code blocks that follow
    file path declarations.

    The file format should have lines like:
        some/path/to/file.ts
        ```
        code...
        ```

    Args:
        data_file (str): The path to the input text file.
        base_dir (str): The base directory where files will be reconstructed.
    """
    if not os.path.exists(data_file):
        print(f"❌ '{data_file}' not found.")
        return

    try:
        with open(data_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"❌ Error reading '{data_file}': {e}")
        return

    pattern = re.compile(
        r"([a-zA-Z0-9_\-./\\]+\.[a-zA-Z]+).*?\n```(?:[\w+-]*)\n(.*?)\n```",
        re.MULTILINE | re.DOTALL
    )

    matches = pattern.findall(content)
    if not matches:
        print("⚠️ No valid file paths with code blocks found.")
        return

    created_files = 0
    seen = set()
    for rel_path, code in matches:
        rel_path = rel_path.strip().strip('`')
        rel_path = os.path.normpath(rel_path)

        if rel_path in seen:
            continue
        seen.add(rel_path)

        file_path = os.path.abspath(os.path.join(base_dir, rel_path))
        if not file_path.startswith(os.path.abspath(base_dir)):
            print(f"❌ Skipped potentially unsafe path: {rel_path}")
            continue

        try:
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(code.rstrip() + '\n') 
            created_files += 1
            print(f"✅ Wrote to: {file_path}")
        except Exception as e:
            print(f"❌ Failed to write to {file_path}: {e}")

    print(f"\n🎉 Done! {created_files} file(s) reconstructed from '{data_file}'.")

if __name__ == "__main__":
    rebuild_files_from_data()