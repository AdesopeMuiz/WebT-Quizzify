// Get the CTA button element
var ctaButton = document.querySelector('.cta-button');

// Add event listener for button click
ctaButton.addEventListener('click', function() {
  alert('Welcome to WebT Digitals! Enjoy your journey of learning and exploration.');
});

// Get all the blog post previews
var blogPreviews = document.querySelectorAll('#blog .blog-post');

// Add event listener for blog post click
blogPreviews.forEach(function(blogPreview) {
  blogPreview.addEventListener('click', function() {
    // Retrieve the blog post ID or URL and redirect the user
    var blogId = this.dataset.blogId;
    window.location.href = 'blog/' + blogId;
  });
});

// Get all the quiz previews
var quizPreviews = document.querySelectorAll('#quizzes .quiz-preview');

// Add event listener for quiz preview click
quizPreviews.forEach(function(quizPreview) {
  quizPreview.addEventListener('click', function() {
    // Retrieve the quiz ID or URL and redirect the user
    var quizId = this.dataset.quizId;
    window.location.href = 'quizzes/' + quizId;
  });
});

// Get the "Read More" link element
var readMoreLink = document.querySelector('.read-more');


