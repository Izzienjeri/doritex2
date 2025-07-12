import os
import re

def rebuild_files_from_data(data_file='data.txt', base_dir='.'):
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
        r"^[ \t]*#+\s*===\s*(.+?)\s*===\s*\n```[\w]*\n([\s\S]*?)```",
        re.MULTILINE
    )

    all_blocks = pattern.findall(content)

    if not all_blocks:
        print("⚠️ No valid code blocks were found in the specified format.")
        return

    def clean_filename(fname):
        return re.sub(r"\s*\([^)]+\)$", "", fname.strip()).strip()

    created_files = 0
    seen = set()
    for fname, code in all_blocks:
        rel_path = clean_filename(fname)
        if not rel_path or rel_path in seen:
            continue
        seen.add(rel_path)

        file_path = os.path.join(base_dir, rel_path)
        
        if not os.path.abspath(file_path).startswith(os.path.abspath(base_dir)):
            print(f"❌ Skipped potentially unsafe path: {rel_path}")
            continue

        try:
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(code.strip() + '\n')
            created_files += 1
            print(f"✅ Wrote to: {file_path}")
        except Exception as e:
            print(f"❌ Failed to write to {file_path}: {e}")

    print(f"\n🎉 Done! {created_files} file(s) reconstructed from '{data_file}'.")

if __name__ == "__main__":
    if not os.path.exists('rebuilt_project'):
        os.makedirs('rebuilt_project')
    rebuild_files_from_data(data_file='data.txt', base_dir='rebuilt_project')