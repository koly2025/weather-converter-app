function convertTemperature() {
    // তাপমাত্রার ইনপুট গ্রহন করা
    const temperature = parseFloat(document.getElementById('temperature').value);  // ইনপুট থেকে তাপমাত্রা গ্রহন
    const unit = document.getElementById('temp-unit').value;  // সিলেক্টেড ইউনিট (Celsius/Fahrenheit/Kelvin)

    // যদি তাপমাত্রা সঠিক না হয় বা খালি ইনপুট থাকে
    if (isNaN(temperature) || temperature === "") {
        alert("অনুগ্রহ করে সঠিক তাপমাত্রা দিন!"); // ব্যবহারকারীকে সতর্ক করতে একটি পপ-আপ মেসেজ
        return; // ফাংশন শেষ, কোনো কনভার্সন হবে না
    }

    // কনভার্টেড তাপমাত্রার জন্য অবজেক্ট তৈরি
    let convertedTemp = {}; 

    // সেলসিয়াস থেকে অন্যান্য ইউনিটে কনভার্ট করা
    if (unit === "celsius") {
        convertedTemp = {
            fahrenheit: (temperature * 9/5) + 32,  // সেলসিয়াস থেকে ফারেনহাইটে কনভার্ট
            kelvin: temperature + 273.15           // সেলসিয়াস থেকে কেলভিনে কনভার্ট
        };
    } else if (unit === "fahrenheit") {
        convertedTemp = {
            celsius: (temperature - 32) * 5/9,   // ফারেনহাইট থেকে সেলসিয়াসে কনভার্ট
            kelvin: ((temperature - 32) * 5/9) + 273.15 // ফারেনহাইট থেকে কেলভিনে কনভার্ট
        };
    } else if (unit === "kelvin") {
        convertedTemp = {
            celsius: temperature - 273.15,           // কেলভিন থেকে সেলসিয়াসে কনভার্ট
            fahrenheit: ((temperature - 273.15) * 9/5) + 32 // কেলভিন থেকে ফারেনহাইটে কনভার্ট
        };
    }

    // কনভার্টেড তাপমাত্রা আউটপুট হিসেবে প্রস্তুত করা
    let output = '';

    // যদি সেলসিয়াস তাপমাত্রার মান NaN না হয়, তবে সেলসিয়াসের কনভার্টেড ভ্যালু প্রদর্শন
    if (!isNaN(convertedTemp.celsius)) {
        output += `<strong>Celsius:</strong> ${convertedTemp.celsius.toFixed(2)}°C<br>`; // সেলসিয়াস কনভার্টেড তাপমাত্রা
    }
    // যদি ফারেনহাইট তাপমাত্রার মান NaN না হয়, তবে ফারেনহাইটের কনভার্টেড ভ্যালু প্রদর্শন
    if (!isNaN(convertedTemp.fahrenheit)) {
        output += `<strong>Fahrenheit:</strong> ${convertedTemp.fahrenheit.toFixed(2)}°F<br>`; // ফারেনহাইট কনভার্টেড তাপমাত্রা
    }
    // যদি কেলভিন তাপমাত্রার মান NaN না হয়, তবে কেলভিনের কনভার্টেড ভ্যালু প্রদর্শন
    if (!isNaN(convertedTemp.kelvin)) {
        output += `<strong>Kelvin:</strong> ${convertedTemp.kelvin.toFixed(2)}K`; // কেলভিন কনভার্টেড তাপমাত্রা
    }

    // কনভার্টেড তাপমাত্রা HTML-এ প্রদর্শন করা
    document.getElementById('converted-temp').innerHTML = output;

    // ব্যাকগ্রাউন্ড রঙ পরিবর্তন করা আবহাওয়া অনুযায়ী
    if (convertedTemp.celsius < 0) {
        // যদি তাপমাত্রা ০°C এর নিচে থাকে, তাহলে ব্যাকগ্রাউন্ড নীল হবে
        document.body.style.backgroundColor = "#00bfff"; // ঠাণ্ডা আবহাওয়া - হালকা নীল
    } else if (convertedTemp.celsius >= 0 && convertedTemp.celsius <= 30) {
        // যদি তাপমাত্রা ০°C থেকে ৩০°C এর মধ্যে থাকে, ব্যাকগ্রাউন্ড আকাশী থাকবে
        document.body.style.backgroundColor = "#f0f8ff"; // সাধারণ আবহাওয়া - হালকা আকাশী
    } else {
        // যদি তাপমাত্রা ৩০°C এর উপরে থাকে, ব্যাকগ্রাউন্ড কমলা (গরম আবহাওয়া)
        document.body.style.backgroundColor = "#ff7f50"; // গরম আবহাওয়া - ম্যানগো রঙ
    }
    
    // কনভার্সন এর আউটপুট কনসোলে প্রদর্শন করা
    console.log("Converted Temperature:", convertedTemp); // কনভার্টেড তাপমাত্রার মান কনসোলে আউটপুট
}
