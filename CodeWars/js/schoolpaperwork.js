// Задача №33

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need.

// Example: paperwork(5, 5) = 25

// Note! if n or m < 0 return 0! Waiting for translations and Feedback! Thanks!


const paperwork = (n, m) => n || m < 0 ? 0 : n * m;