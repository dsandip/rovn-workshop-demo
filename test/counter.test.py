"""Test: verify the homepage counter value in index.html."""
import re
import sys
from pathlib import Path

html = (Path(__file__).parent.parent / "index.html").read_text()
match = re.search(r'id="counter"[^>]*>(\d+)<', html)
if not match:
    print("FAIL: counter element not found in index.html")
    sys.exit(1)

value = int(match.group(1))
expected = 6898
if value != expected:
    print(f"FAIL: expected counter to be {expected}, got {value}")
    sys.exit(1)

print(f"PASS: counter is {value} (expected {expected})")
