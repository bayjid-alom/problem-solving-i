const today = new Date();  // (বছর - মাস - দিন)
console.log(today)  // 2026-06-09T08:04:56.864Z  BD: 09-06-2026

const date = new Date("2026-05-12");
console.log(date.getDay());     // 2 🥲
console.log(date.getMonth());   // 4 🥲


const specificDate = new Date(2026, 10, 15);   // month & day : index from 0
console.log(specificDate)  // 2026-11-14T18:00:00.000Z
specificDate.setMonth(4)

console.log(specificDate)  // 2026-05-14T18:00:00.000Z

// মাস ও দিন ঠিকঠাক না আসলে কি করবো ? 
console.log(specificDate.toLocaleDateString("en-BG")) //  5/15/2026
// গ্রেট ব্রিটেন - (মাস - দিন - বছর)



/**
 👉 ১ জানুয়ারি ১৯৭০, রাত 00:00:00 UTC কে কম্পিউটার জগতে 
 একটি reference starting point ধরা হয়। এটাকেই Unix Epoch বলে।

JavaScript-এর Date object সময়কে এই তারিখ থেকে মিলিসেকেন্ড (milliseconds) হিসেবে গণনা করে।

Time zone :

✅ UTC কী?
UTC (Coordinated Universal Time) হলো পৃথিবীর একটি standard time। সব দেশের সময় UTC-এর উপর ভিত্তি করে নির্ধারণ করা হয়।

উদাহরণ:
Bangladesh = UTC +6
India = UTC +5:30
UK (শীতকালে) = UTC +0

যদি UTC-তে সময় হয়:  12:00 PM
তাহলে বাংলাদেশে হবে:  06:00 PM (UTC +6)




✅ Daylight Saving Time (DST) কী?
কিছু দেশে গ্রীষ্মকালে দিনের আলো বেশি সময় কাজে লাগানোর জন্য ঘড়ি ১ ঘণ্টা এগিয়ে দেওয়া হয়। এটাকে Daylight Saving Time (DST) বলে।

উদাহরণ:
ধরো কোনো দেশে সময়:  08:00 AM
DST শুরু হলে ঘড়ি এগিয়ে করা হয়:  09:00 AM

এতে সন্ধ্যায় এক ঘণ্টা বেশি আলো পাওয়া যায়।
 */