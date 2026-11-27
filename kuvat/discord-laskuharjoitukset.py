from math import comb, sqrt

W, H = 800, 320
ROWS, DX, R = 16, 20, 7.5
DY = DX * sqrt(3) / 2
APEX_X, APEX_Y = 608,(H - (ROWS - 1) * DY) / 2

odd, even = [], []
for n in range(ROWS):
    for k in range(n + 1):
        dot = f'<circle cx="{APEX_X + (2 * k - n) * DX / 2:.1f}" cy="{APEX_Y + n * DY:.1f}" r="{R}"/>'
        (odd if comb(n, k) % 2 else even).append(dot)
odd, even = "\n".join(odd), "\n".join(even)
print(f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img">
<title>Laskuharjoitukset</title>
<rect width="{W}" height="{H}" fill="#2d3e50"/>
<g fill="none" stroke="#f2f4ef" stroke-opacity="0.3" stroke-width="1.5">
{even}
</g>
<g fill="#ecc98e">
{odd}
</g>
<text x="48" y="62" font-family="Lato, sans-serif" font-size="18" font-weight="700" letter-spacing="0.7" fill="#9ec7e8">matematiikkakilpailut.fi</text>
<text x="48" y="190" font-family="Lato, sans-serif" font-size="46" font-weight="900" letter-spacing="-0.5" fill="#f5f6f4">Laskuharjoitukset</text>
</svg>''')
