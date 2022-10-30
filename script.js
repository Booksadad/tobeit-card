let counter = 0; // เราสร้างตัวแปรด้วย let ชื่อว่า counter และกำหนดค่าเริ่มต้นเป็น 0

const กินไก่ย่าง = () => {
    counter++; // ทุกครั้งที่ Function นี้ถูกเรียกใช้ ค่าของ counter จะเพิ่มขึ้น 1
    const topic = document.getElementById("blog-topic");
    const content = document.getElementById("blog-content");

    topic.innerHTML = "ร้านไก่ย่าง!";
    content.innerHTML = "Today we're going to use ไก่ย่าง for ข้าวเช้า. <br/>ร้านที่ " + counter;

    topic.style.color = "rgb"
}