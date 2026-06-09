from PIL import Image
import os

TARGET_SIZE = 500 * 1024  # 500 KB

def compress_png_to_target(path):
    try:
        img = Image.open(path)

        # Convert for palette optimization
        if img.mode != "P":
            img = img.convert("RGBA")

        temp_path = path

        # Try reducing colors progressively
        for colors in [256, 128, 64, 32, 16]:
            temp = img.convert("P", palette=Image.ADAPTIVE, colors=colors)

            temp.save(
                temp_path,
                optimize=True,
                compress_level=9
            )

            size = os.path.getsize(temp_path)

            print(f"{os.path.basename(path)} -> {size/1024:.2f} KB with {colors} colors")

            if size <= TARGET_SIZE:
                print(f"✔ Final compressed: {os.path.basename(path)}")
                return

        print(f"⚠ Could not reach 500KB exactly: {os.path.basename(path)}")

    except Exception as e:
        print(f"Failed: {path} -> {e}")


def compress_all_pngs():
    current_folder = os.getcwd()

    for file in os.listdir(current_folder):
        if file.lower().endswith(".png"):
            compress_png_to_target(os.path.join(current_folder, file))


compress_all_pngs()