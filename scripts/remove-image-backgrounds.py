from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

PUBLIC = Path(__file__).resolve().parents[1] / "public"


def remove_checkerboard_background(path: Path) -> None:
    image = Image.open(path).convert("RGBA")
    width, height = image.size
    pixels = image.load()

    min_x, min_y, max_x, max_y = width, height, 0, 0
    for y in range(height):
        for x in range(width):
            red, green, blue, _alpha = pixels[x, y]
            if min(red, green, blue) < 228:
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)

    margin = 12
    min_x = max(0, min_x - margin)
    min_y = max(0, min_y - margin)
    max_x = min(width - 1, max_x + margin)
    max_y = min(height - 1, max_y + margin)

    for y in range(height):
        for x in range(width):
            if x < min_x or x > max_x or y < min_y or y > max_y:
                pixels[x, y] = (pixels[x, y][0], pixels[x, y][1], pixels[x, y][2], 0)

    image.save(path, "PNG")


def is_background_pixel(red: int, green: int, blue: int) -> bool:
    return min(red, green, blue) >= 218 and max(red, green, blue) - min(red, green, blue) <= 12


def remove_edge_background(path: Path) -> None:
    image = Image.open(path).convert("RGBA")
    width, height = image.size
    pixels = image.load()
    visited = [[False] * width for _ in range(height)]
    queue: deque[tuple[int, int]] = deque()

    def enqueue(x: int, y: int) -> None:
        if 0 <= x < width and 0 <= y < height and not visited[y][x]:
            red, green, blue, _alpha = pixels[x, y]
            if is_background_pixel(red, green, blue):
                visited[y][x] = True
                queue.append((x, y))

    for x in range(width):
        enqueue(x, 0)
        enqueue(x, height - 1)
    for y in range(height):
        enqueue(0, y)
        enqueue(width - 1, y)

    while queue:
        x, y = queue.popleft()
        pixels[x, y] = (pixels[x, y][0], pixels[x, y][1], pixels[x, y][2], 0)
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            enqueue(nx, ny)

    image.save(path, "PNG")


def main() -> None:
    remove_checkerboard_background(PUBLIC / "primobalnce.png")
    remove_edge_background(PUBLIC / "primoBalanceMob.png")
    print("Backgrounds removed successfully.")


if __name__ == "__main__":
    main()
