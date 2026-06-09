# ============================================
# PNG COMPRESSOR (MAX 300KB)
# --------------------------------------------
# ✔ Compress PNG files larger than 300KB
# ✔ Scans ONLY current folder
# ✔ Replaces original image
# ✔ Moves original image to /bin folder
# ✔ No recursion / no subfolder scan
#
# INSTALL:
# pip install pillow
#
# RUN:
# python compress.py
# ============================================

import os
import shutil
from PIL import Image

# ---------- SETTINGS ----------
TARGET_SIZE_KB = 300
CURRENT_FOLDER = os.getcwd()
BIN_FOLDER = os.path.join(CURRENT_FOLDER, "bin")
# ------------------------------

# Create bin folder
os.makedirs(BIN_FOLDER, exist_ok=True)


def compress_image(input_path, output_path):
    """
    Compress image aggressively until under target size.
    """

    img = Image.open(input_path)

    # Convert safely
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGBA")

    # Try different color levels
    for colors in [256, 128, 64, 32, 16, 8]:

        compressed = img.convert(
            "P",
            palette=Image.ADAPTIVE,
            colors=colors
        )

        compressed.save(
            output_path,
            format="PNG",
            optimize=True
        )

        size_kb = os.path.getsize(output_path) / 1024

        print(f"   Trying {colors} colors -> {size_kb:.2f} KB")

        if size_kb <= TARGET_SIZE_KB:
            return size_kb

    # Return final size even if >300KB
    return os.path.getsize(output_path) / 1024


print("\n🔍 Scanning current folder...\n")

for filename in os.listdir(CURRENT_FOLDER):

    # Only PNG files
    if filename.lower().endswith(".png"):

        file_path = os.path.join(CURRENT_FOLDER, filename)

        original_size = os.path.getsize(file_path) / 1024

        # Skip already small files
        if original_size <= TARGET_SIZE_KB:
            continue

        print(f"📦 Compressing: {filename}")
        print(f"   Original: {original_size:.2f} KB")

        try:

            # Backup original
            backup_path = os.path.join(BIN_FOLDER, filename)
            shutil.copy2(file_path, backup_path)

            # Temp file
            temp_output = file_path + ".temp.png"

            # Compress
            final_size = compress_image(file_path, temp_output)

            # Replace original
            os.remove(file_path)
            os.rename(temp_output, file_path)

            print(f"   ✅ Final Size: {final_size:.2f} KB")
            print(f"   ✅ Backup saved in /bin\n")

        except Exception as e:
            print(f"   ❌ ERROR: {e}\n")

            # Remove temp if exists
            if os.path.exists(temp_output):
                os.remove(temp_output)

print("✅ DONE")