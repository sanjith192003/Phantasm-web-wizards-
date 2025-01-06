const qrCodeContainer = document.getElementById('qr-code');
const qrCodeText = 'https://example.com/schedule';

QRCode.toCanvas(qrCodeContainer, qrCodeText, {
    width: 150,
    margin: 2,
    color: {
        dark: '#000000',
        light: '#ffffff'
    }
}, function (error) {
    if (error) console.error(error);
    console.log('QR code generated successfully!');
});

document.getElementById('schedule-btn').addEventListener('click', function() {
    window.location.href = 'new.html';
});
