import os
import re

def rebuild_files_from_data(data_file='data.txt', base_dir='.'):
    if not os.path.exists(data_file):
        print(f"❌ '{data_file}' not found.")
        return

    with open(data_file, 'r', encoding='utf-8') as f:
        content = f.read()

    created_files = 0
    all_blocks = []

    def clean_filename(fname):
        return re.sub(r"\s*\([^)]+\)$", "", fname.strip()).strip()

    pattern_internal_header = r"```[\w]*\n\s*(?://|#) === (.+?) ===\n([\s\S]*?)```"
    for fname, code in re.findall(pattern_internal_header, content):
        all_blocks.append((clean_filename(fname), code))

    pattern_external_header = r"(?://|#) === (.+?) ===\s*```[\w]*\n([\s\S]*?)```"
    for fname, code in re.findall(pattern_external_header, content):
        all_blocks.append((clean_filename(fname), code))

    if not all_blocks:
        print("⚠️ No valid code blocks found.")
        return

    seen = set()
    for rel_path, code in all_blocks:
        rel_path = rel_path.strip()
        if not rel_path or rel_path in seen:
            continue
        seen.add(rel_path)

        file_path = os.path.join(base_dir, rel_path)
        if not os.path.abspath(file_path).startswith(os.path.abspath(base_dir)):
            print(f"❌ Skipped potentially unsafe path: {rel_path}")
            continue

        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(code.strip() + '\n')
        created_files += 1
        print(f"✅ Wrote to: {rel_path}")

    print(f"\n🎉 Done! {created_files} file(s) reconstructed from '{data_file}'.")

if __name__ == "__main__":
    rebuild_files_from_data()