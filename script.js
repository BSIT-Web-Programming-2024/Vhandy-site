const words = [" Web Developer", " Web Designer", " Animator", " Editor"];
        let currentIndex = 0;
        let currentWord = words[currentIndex];
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 150; 
        const deleteSpeed = 100; 
        const delayAfterTyping = 1000; 

        const typingElement = document.getElementById("Text");

        function type() {
            if (!isDeleting) {
               
                if (charIndex < currentWord.length) {
                    typingElement.textContent += currentWord.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, typingSpeed);
                } else {
                   
                    setTimeout(() => {
                        isDeleting = true;
                        setTimeout(type, delayAfterTyping); 
                    }, delayAfterTyping);
                }
            } else {
                
                if (charIndex > 0) {
                    typingElement.textContent = currentWord.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(type, deleteSpeed);
                } else {
                    
                    isDeleting = false;
                    currentIndex = (currentIndex + 1) % words.length; 
                    currentWord = words[currentIndex];
                    setTimeout(type, typingSpeed); // 
                }
            }
        }

        
        type();

        document.getElementById("joinUs").onclick = function() {
            localStorage.setItem("showWelcomeAlert", "true");
        };
        
        if (localStorage.getItem("showWelcomeAlert") === "true") {
    
            alert("Welcome to the Join Us page!");
            
            localStorage.removeItem("showWelcomeAlert");
        }