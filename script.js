const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

// ajax
// $(document).ready(function() {
//   $('#load-data').click(function() {
//     $.ajax({
//       url: 'ajax.txt', // Replace with the actual URL or endpoint to fetch data
//       type: 'GET',
//       dataType: 'text',
//       success: function(data) {
//         // Process the data
//         $('#result').text(data);
//       },
//       error: function(xhr, status, error) {
//         console.log('Error:', status, error);
//       }
//     });
//   });
// });