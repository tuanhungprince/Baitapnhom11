document.getElementById("myBtn").addEventListener("click", function() {
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 10); // 1000 milliseconds = 1 second, you can adjust this delay as needed
  });


// // Lấy ra phần tử container và nút
// var container = document.getElementById("container");
// var myBtn = document.getElementById("myBtn");
 
// // Lắng nghe sự kiện cuộn
// window.addEventListener("scroll", function() {
//   var scrollPosition = window.scrollY; // Lấy vị trí cuộn của trang
  
//   // Nếu vị trí cuộn của trang nằm trong khoảng từ 1000px đến cuối trang
//   if (scrollPosition >= 500 && scrollPosition + window.innerHeight <= document.body.offsetHeight) {
//     // Hiển thị nút
//     myBtn.style.display = "block";
    
//     // Tính toán vị trí top mới cho nút
//     var newTop = Math.max(scrollPosition + window.innerHeight - myBtn.offsetHeight - 1, 500); // 20 là khoảng cách từ nút đến bottom, 1000 là vị trí tối thiểu
    
//     // Đặt vị trí top mới cho nút
//     myBtn.style.top = newTop + "px";
//   } else {
//     // Nếu không, ẩn nút
//     myBtn.style.display = "none";
//   }
// });

// Lấy ra phần tử container và nút
var container = document.getElementById("container");
var myBtn = document.getElementById("myBtn");

// Lắng nghe sự kiện cuộn
window.addEventListener("scroll", function() {
  var scrollPosition = window.scrollY; // Lấy vị trí cuộn của trang

  // Nếu vị trí cuộn của trang nằm trong khoảng từ 500px trở lên
  if (scrollPosition >= 500) {
    // Hiển thị nút
    myBtn.style.display = "block";

    // Tính toán vị trí top mới cho nút
    var newTop = Math.max(scrollPosition + window.innerHeight - myBtn.offsetHeight - 1, 500); // 20 là khoảng cách từ nút đến bottom, 1000 là vị trí tối thiểu

    // Đặt vị trí top mới cho nút
    myBtn.style.top = newTop + "px";
  } else {
    // Nếu không, ẩn nút
    myBtn.style.display = "none";
  }
});



function toggleAnswer(answerClass) {
  var answerElement = document.querySelector('.' + answerClass);
  if (answerElement.classList.contains('hidden')) {
    answerElement.classList.remove('hidden');
  } else {
    answerElement.classList.add('hidden');
  }
}






 