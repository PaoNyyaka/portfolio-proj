export  const email = 'paonyao5@gmail.com';

 export const handleEmailClick = (event) => {
  event.preventDefault();
  if (/^mailto:/.test(email)) {
    window.location.href = 'mailto:' + email;
  } else {
    console.error('Mailto link is not supported in this browser.');
    window.prompt('Copy email address:', email);
  }
 
}; 