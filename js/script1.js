document.addEventListener("DOMContentLoaded", function () {
  // Ensure Swiper library is imported
  if (typeof Swiper === "undefined") {
    console.error("Swiper library is not loaded. Please include it in your project.");
    return;
  }

  // Swiper initialization
  try {
    new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  } catch (error) {
    console.error("Swiper initialization failed:", error);
  }


  
  // Store about text in an object, keyed by name
  const aboutTextData = {
    "Zin Lynn Thant":
      "I have a deep passion for exploring books, expressing my thoughts through creative writing, and making music with the guitar. Whether it’s getting lost in a novel, crafting literary pieces, or strumming melodies, these activities allow me to unleash my creativity. In the future, I aspire to become a thriving entrepreneur, leading my own innovative startup and making a meaningful impact in the business world. With a strong foundation in leadership and strategic planning, I excel at organizing teams, making informed decisions, and building strong connections. I am always eager to refine my skills and embrace new challenges, ensuring that I grow both personally and professionally.",
    "Ei Ei Chaw":
      "I have a passion for photography and videography, as they allow me to capture moments and tell compelling stories. My ambition is to excel in financial management, ensuring efficient planning and resource allocation. With a blend of creativity and analytical thinking, I approach challenges with innovative solutions and a strategic mindset.",
    "Ei Ei Phyo":
      "I find reading and cooking to be valuable ways to expand my knowledge and creativity. My ambition is to become a skilled surgeon, committed to making a meaningful impact in the medical field. With expertise in advanced Excel, cybersecurity, and computer skills, along with strong communication, leadership, analytical thinking, and public speaking abilities, I contribute effectively to teamwork and collaboration, ensuring efficiency and precision in every task I take on.",
    "Wai Thown Hnin":
      "I find great joy in immersing myself in books, as reading not only broadens my knowledge but also sharpens my analytical thinking. My passion for learning drives my ambition to become a dedicated educator, someone who not only imparts knowledge but also inspires change. Beyond teaching, I am deeply committed to playing a role in shaping a better society, using education as a tool for progress. With a strong background in marketing and strategic thinking, I excel at crafting impactful campaigns, analyzing trends, and communicating effectively. I continuously strive to enhance my abilities, ensuring that my work creates meaningful and lasting influence.",
    "Shwe Phoo Eain":
      "I am passionate about studying languages, creating videos, editing photos, and crafting handmade items, as these activities allow me to explore creativity in different forms. My ambition is to become a professional video and graphic designer, transforming ideas into compelling visuals. With strong skills in management, problem-solving, critical thinking, leadership, and presentation, I strive to create meaningful and innovative designs that leave a lasting impact.",
    "Shoon Lae Oo":
      "I find inspiration in listening to podcasts, cooking, and reading biographical books, as they offer new perspectives and a deeper understanding of the world. My ambition is to create a positive and meaningful impact on society by working with communities and organizations that address social issues. While pursuing my educational goals, I am committed to actively contributing to solutions for societal challenges and aspire to join an NGO in a dedicated role in the future. With strong communication, adaptability, problem-solving, and data analysis skills, I excel in cross-functional collaboration and presenting ideas effectively to drive meaningful change.",
    "Bhone Pyae Ko":
      "Hello! I'm Jake, a passionate developer with strong interest in web development and software developement. I enjoy coding, learning new programming languages, and volunteering for community. My goal is to become a full-stack developer and create accessible digital solutions. I have experience in frontend development, managing websites, and organizing coding workshops. Always eager to learn and innovate!",
    "Shwe Yi Phuu Wai":
      "I enjoy watching movies, reading books, and dancing, as they help me relax, learn, and express myself creatively. My ambition is to become an independent woman, capable of making my own decisions and shaping my future with confidence. With strong analytical thinking, problem-solving abilities, and effective communication skills, I strive to excel in every challenge I take on, continuously growing both personally and professionally.",
    "Aung Wai Phyo":
      "I have a strong interest in exploring technology, from using computers for creative projects to staying updated on the latest digital trends. I enjoy experimenting with software, coding, and optimizing digital tools to enhance productivity. My ambition is to become a successful businessman and gain widespread recognition for my contributions to the tech industry. With advanced computer proficiency, problem-solving abilities, and a keen understanding of digital systems, I excel in utilizing technology to drive efficiency, innovation, and business growth across various sectors.",
    "Hein Htet Oo":
      "I have a strong enthusiasm for sports and exploring technologies related to electricity, as they challenge me to think critically and innovate. My ambition is to create a better environment for those around me while fostering a well-rounded perspective on different aspects of life. With reliability, adaptability, and a passion for continuous learning, I excel in cycling, electrical and electronic reformations, and finding practical solutions to engineering challenges.",
    "Naing Khant Aung":
      "I have a strong passion for reading, photography, and learning English, as they allow me to expand my knowledge and capture meaningful moments. My ambition is to become a cybersecurity expert, author, motivational speaker, and vlogger, using my expertise to inspire others and contribute to the digital world. With a sharp mind for solving mathematical problems, a knack for effective communication, and a deep understanding of political affairs, I am committed to continuous growth and making a lasting impact in both academia and society.",
    "Ye Man Oo":
      "My hobbies include going to the gym, playing football, and photography. I aspire to become a successful businessman, continuously striving for growth and achievement. With strong communication and problem-solving skills, I am confident in navigating challenges and making meaningful contributions in any endeavor.",
    "Zay Phyo Naing":
      "I genuinely enjoy reading, drawing, and collaborating with others, as these activities allow me to express creativity and build meaningful connections. Music is also an essential part of my life, helping me stay inspired and focused. My ambition is to be someone who actively supports and uplifts my community, contributing to its growth and development. With strong communication, public speaking, leadership, and management skills, I excel at bringing people together, organizing tasks efficiently, and ensuring smooth coordination in any team or project I am part of.",
  };

  // Create modal elements
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  document.body.appendChild(modalOverlay);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalOverlay.appendChild(modalContent);

  const modalClose = document.createElement("button");
  modalClose.classList.add("modal-close");
  modalClose.textContent = "×";
  modalContent.appendChild(modalClose);

  const modalTitle = document.createElement("h3");
  modalContent.appendChild(modalTitle);

  const modalText = document.createElement("p");
  modalContent.appendChild(modalText);

  // Close modal when clicking the close button
  modalClose.addEventListener("click", function () {
    modalOverlay.classList.remove("show");
  });

  // Close modal when clicking outside the modal content
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("show");
    }
  });

  // About Me button functionality
  const aboutButtons = document.querySelectorAll(".aboutMe");

  aboutButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cardContent = this.closest(".card-content");
      const nameElement = cardContent.querySelector(".name");
      const professionElement = cardContent.querySelector(".profession");

      if (nameElement && professionElement) {
        const name = nameElement.textContent;
        const profession = professionElement.textContent;

        // Set modal content
        modalTitle.textContent = `${name} - ${profession}`;
        modalText.textContent =
          aboutTextData[name] || "No information available.";

        // Show modal
        modalOverlay.classList.add("show");
      } else {
        console.error(
          "Name or profession element not found in card:",
          cardContent
        );
      }
    });
  });
});


