document.addEventListener('DOMContentLoaded', () => {
    console.log(`DOM fully loaded and parsed`); // Debugging statement to confirm DOM load
    console.log(`Script is executing`); // Debugging statement to confirm script execution


    document.getElementById('generateBtn').addEventListener('click', () => {
        const qrInput = document.getElementById('qrInput').value;
        const pixelSize = document.getElementById('pixelSize').value; // Get pixel size from dropdown
        const typeSelect = document.getElementById('typeSelect').value; // Get selected type from dropdown

        // Declare qrData variable
        let qrData; 
        // Modify qrData based on selected type
        if (typeSelect === 'socialMedia') {
            qrData = `${qrInput}`; // Example format for social media
        } else if (typeSelect === 'website') {
            qrData = `${qrInput}`; // Assume input is a website
        }

        console.log(`Button clicked!`); // Debugging statement to confirm button click
console.log(`Button clicked!`); // Debugging statement to confirm button click
console.log(`QR Data: ${qrData}`); // Debugging statement to check qrData








        console.log(`Input value: ${qrInput}`); // Debugging statement
        console.log(`Selected type: ${typeSelect}`); // Debugging statement

        const fileFormat = 'png'; // Default file format

        // Generate QR Code with specified pixel size
        $('#qrCode').empty(); // Clear previous QR code
        $('#qrCode').qrcode({
            text: qrData,
            width: pixelSize,
            height: pixelSize
        });

        // Make the download button visible
        document.getElementById('downloadBtn').style.display = 'block';
    });

    document.getElementById('downloadBtn').addEventListener('click', () => {
        const canvas = document.querySelector('#qrCode canvas'); // Get the QR code canvas
        const link = document.createElement('a'); // Create a link element
        const formatSelect = document.getElementById('formatSelect').value; // Get selected format
        const format = formatSelect; // Use selected format for download


        link.href = canvas.toDataURL(`image/${formatSelect}`); // Convert canvas to data URL based on selected format
        link.download = `qr_code.${formatSelect}`; // Set the download filename based on selected format

        link.click(); // Trigger the download
    }); // Closing the DOMContentLoaded event listener
});
