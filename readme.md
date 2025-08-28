

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

### Answer number 1
**getElementById:** এইটা শুধু id কে সিলেক্ট করে,এবং ইউনিক ভাবে সিলেক্ট করবে এবং অউটপুট শুধু একটিই দিবে

**getElementsByClassName:**এটি একই নামের একাদিক ক্লাস কে সিলেক্ট করে এবং এরের মতো ভেলু রিটার্ন করে ,মানে হচ্ছে একাদিক ভেলু আউটপুট হিসেবে দেই

 **querySelector:**এটি যেকোন সিলেক্টর কে ধরে (যেমনঃid,class,tagname)প্রথম মিলে যাওয়া ভেলুকে আউটপুট হিসেবে দেই,অউটপুট দেই একটি ভেলু

**querySelectorAll** এটি সিলেক্টর ব্যবহার করে সব মিলে যাওয়া ভেলুগুলো nodelist আকারে দেই মানে হচ্ছে এরের মতো আউটপুট দেই

### Answer number 2
**create and insert a new element into the DOM**
const createElement=document.createElement("p")
createElement.innerText="Amar Sunar Bangla Ami Tumai Valobashi"
document.body.appendChild(createElement)

### Answer number 3
**Event Bubbling**ইভেন্ট বাবলিং হচ্ছে কোন একটি উপাদান কে ইভেন্ট করলে এটি তার পেরেন্ট থেকে পেরেন্ট এ যায়,ইভেন্ট টি ভিতর থেকে বাইরের দিকে বাবল করে
মোট কথা চাইল্ট এলিমেন্ট এ ইভেন্ট ঘটলে বাবলিং করে বাইরের পেরেন্ট এর দিকে যায়

### Answer number 4
**Event Delegation**ইভেন্ট ডিলিগেশন হচ্ছে চাইল্ট এলিমেন্ট এ ইভেন্ট লিছেনার না বসে বরং
পেরেন্ট এলিমেন্টে বসে বাবলিং এর মাধ্যমে চাইল্ট এলিমেন্ট এ আসে,তাতে কোড কম লিখতে হয়
এবং নিয়ন্ত্রন সহজ হয়

### Answer number 5
**preventDefault() and stopPropagation()**
preventDefault():এটা দ্বারা ডিফল্ট কাজ বন্ধ করা হয় ,যেমন ফর্ম এর ভিতরে কোনো বাটন থাকলে তাতে ক্লিক করলে অটু রিলোড হয় তা বন্ধ করার জন্যে এটা ব্যবহার করা হয়

stopPropagation()**এটা দ্বারা বাবলিং বন্ধ করা হয়,এর মানে হলো চাইল্ট কে ইভেন্ট করলে এটা বাবলিং করে বাইরের পেরেন্টের দিকে যাওয়া বন্ধ করে এই ফাংশন
