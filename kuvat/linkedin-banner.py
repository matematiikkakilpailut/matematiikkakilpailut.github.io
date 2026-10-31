W, H, a, b = 1128, 191, 64, 48
rects, paths = [], []
for i in range(-20, 30):
    for j in range(-20, 30):
        x, y = i * a - j * b, i * b + j * a
        if -2 * a < x < W + a and -2 * a < y < H + a:
            rects.append(f'<rect x="{x}" y="{y}" width="{a}" height="{a}" fill="#9ec7e8"/>')
            rects.append(f'<rect x="{x + a - b}" y="{y + a}" width="{b}" height="{b}" fill="#a9d6a1"/>')
            paths.append(f'<path d="M{x},{y}l{a},{b}l{-b},{a}l{-a},{-b}z"/>')
rects, paths = "\n".join(rects), "\n".join(paths)
print(f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
<defs>
<linearGradient id="fade"><stop offset="0.12" stop-color="#fff" stop-opacity="0.15"/><stop offset="0.6" stop-color="#fff"/></linearGradient>
<mask id="m"><rect width="{W}" height="{H}" fill="url(#fade)"/></mask>
</defs>
<rect width="{W}" height="{H}" fill="#2d3e50"/>
<g mask="url(#m)">
<g fill-opacity="0.22" stroke="#2d3e50" stroke-width="3">
{rects}
</g>
<g fill="none" stroke="#ecc98e" stroke-width="2" stroke-opacity="0.7" stroke-linejoin="round">
{paths}
</g>
</g>
</svg>''')
