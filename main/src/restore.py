import os
import re

def rebuild_files_from_data(data_file='data.txt', base_dir='.'):
    if not os.path.exists(data_file):
        print(f"❌ '{data_file}' not found.")
        return

    with open(data_file, 'r', encoding='utf-8') as f:
        content = f.read()

    created_files = 0

    # Try to match both formats:
    # 1. Markdown-style fenced code blocks
    pattern_fenced = re.findall(
        r"# === (.+?) ===\s+```[\w]+\s+([\s\S]+?)```",
        content
    )

    # 2. Plain format: # === filename ===\ncode\n... until next # === or end of file
    pattern_plain = re.split(r"# === (.+?) ===", content)[1:]  # skip initial non-matching content
    pattern_plain_pairs = [
        (pattern_plain[i], pattern_plain[i+1].split("# ===")[0].strip())
        for i in range(0, len(pattern_plain)-1, 2)
    ]

    # Combine both
    all_blocks = pattern_fenced + pattern_plain_pairs

    if not all_blocks:
        print("⚠️ No valid code blocks found in the data file.")
        return

    for rel_path, code in all_blocks:
        file_path = os.path.join(base_dir, rel_path.strip())
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(code.strip() + '\n')
        created_files += 1
        print(f"✅ Wrote to: {rel_path.strip()}")

    print(f"\n🎉 Done! {created_files} file(s) reconstructed from '{data_file}'.")

if __name__ == "__main__":
    rebuild_files_from_data()
