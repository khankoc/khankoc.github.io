const fs = require('fs');
const path = require('path');

// SVG dosyasını oku
const svgPath = path.join(__dirname, 'public/images/avatars/giray-cengiz.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

// SVG'yi base64'e çevir
const base64Svg = Buffer.from(svgContent).toString('base64');
const dataUrl = `data:image/svg+xml;base64,${base64Svg}`;

// HTML template oluştur
const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
    <title>SVG to PNG Converter</title>
</head>
<body>
    <img src="${dataUrl}" id="svgImage" style="width: 200px; height: 200px;">
    <canvas id="canvas" width="200" height="200" style="display: none;"></canvas>
    <script>
        const img = document.getElementById('svgImage');
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        img.onload = function() {
            ctx.drawImage(img, 0, 0, 200, 200);
            
            // PNG olarak indir
            const link = document.createElement('a');
            link.download = 'giray-cengiz.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        };
    </script>
</body>
</html>
`;

// HTML dosyasını oluştur
fs.writeFileSync('convert.html', htmlTemplate);

console.log('HTML dosyası oluşturuldu. Tarayıcıda açıp PNG olarak indirebilirsiniz.'); 