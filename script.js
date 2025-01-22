// -----------------------------
// Navigation Scroll Effect
// -----------------------------
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 50);
});

// -----------------------------
// FAQ Accordion Functionality
// -----------------------------
document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    const active = document.querySelector(".faq-question.active");
    if (active && active !== question) {
      active.classList.remove("active");
      active.nextElementSibling.classList.remove("active");
    }
    question.classList.toggle("active");
    question.nextElementSibling.classList.toggle("active");
  });
});

// -----------------------------
// Fade-In Effect on Scroll
// -----------------------------
const faders = document.querySelectorAll(".fade-in-section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));

// -----------------------------
// Translation Dictionary
// -----------------------------
const translations = {
  en: {
    // Page Title
    "page.title": "Riley & Aleida's Wedding Celebration",

    // Navigation
    "nav.logo": "R&A",
    "nav.celebrate": "Celebrate",
    "nav.ourStory": "Our Story",
    "nav.theBigDay": "The Big Day",
    "nav.registry": "Our Gift Registry",
    "nav.rsvp": "Kindly RSVP",
    "nav.admin": "Admin",

    // Hero Section
    "hero.title": "Riley & Aleida",
    "hero.dateLocation": "June 21, 2025 • Cape Coral, FL",
    "hero.tagline": "Join us as we celebrate love, laughter, and happily ever after.",
    "hero.countdownTitle": "Days Until We Say \"I Do\":",

    // Countdown Timer
    "countdown.married": "Happily Married!",

    // Wedding Details
    "details.title": "Celebrate with Us",
    "details.ceremonyTitle": "Ceremony & Reception",

    // Our Story
    "story.title": "Our Story",
    "story.quoteAuthor": "— Herman Hesse",
    "story.paragraph1": "We found something beautiful in each other.",
    "story.paragraph2": "And now, we can’t wait to celebrate this next step surrounded by friends and family who have been cheering us on every step of the way!",

    // The Big Day
    "schedule.title": "The Big Day",
    "schedule.time1": "4:00 PM",
    "schedule.event1": "Guest Arrival",
    "schedule.details1": "Welcome drinks available",
    "schedule.time2": "4:30 PM",
    "schedule.event2": "Ceremony Begins",
    "schedule.details2": "Please be seated by 4:25 PM",
    "schedule.time3": "5:15 PM",
    "schedule.event3": "Family Photos",
    "schedule.details3": "Cocktail hour begins",
    "schedule.time4": "6:30 PM",
    "schedule.event4": "Reception Begins",
    "schedule.details4": "Grand entrance & welcome",
    "schedule.time5": "7:00 PM",
    "schedule.event5": "First Dance",
    "schedule.details5": "Followed by parent dances",
    "schedule.time6": "7:30 PM",
    "schedule.event6": "Dinner Service",
    "schedule.details6": "Toasts & speeches",
    "schedule.time7": "8:45 PM",
    "schedule.event7": "Cake Cutting",
    "schedule.details7": "Dessert service",
    "schedule.time8": "9:00 PM",
    "schedule.event8": "Open Dancing",
    "schedule.details8": "Including bouquet & garter toss",

    // Registry
    "registry.title": "Our Gift Registry",
    "registry.description": "We appreciate your presence most of all. But if you would like to bless us with a gift, you can explore our registries below.",
    "registry.amazon": "Amazon Registry",
    "registry.target": "Target Registry",
    "registry.honeymoon": "Honeymoon Fund",

    // FAQ
    "faq.title": "FAQ",
    "faq.contactQuestion": "How can I contact the couple?",
    "faq.contactAnswer1": "For any questions or concerns, please reach out to:",
    "faq.contactRiley": "Riley: (561) 275-6954",
    "faq.contactAleida": "Aleida: (786) 985-8328",
    "faq.contactEmail": "Email: bellinfamily12@gmail.com",
    "faq.contactAnswer2": "We'll respond as soon as possible!",

    "faq.venueQuestion": "What time should I arrive?",
    "faq.venueAnswer1": "Please plan to arrive by 4:00 PM to allow time for:",
    "faq.venueList1": "Finding parking",
    "faq.venueList2": "Finding your preferred seat (open seating)",
    "faq.venueList3": "Saying hi to other guests",
    "faq.venueAnswer2": "The ceremony will begin promptly at 4:30 PM.",

    "faq.parkingQuestion": "Where should I park?",
    "faq.parkingAnswer1": "Complimentary parking is available at:",
    "faq.parkingList1": "Lake Kennedy Center main parking lot",
    "faq.parkingList2": "Additional overflow parking nearby if needed",
    "faq.parkingAnswer2": "The venue is easily accessible from the parking area. It will look like a normal, regular parking setup.",

    "faq.attireQuestion": "What should I wear?",
    "faq.attireAnswer1": "We request cocktail attire for our celebration:",
    "faq.attireList1": "Men: Suit or sport coat with dress pants",
    "faq.attireList2": "Women: Cocktail dress or elegant pantsuit",
    "faq.attireList3": "Please avoid white, cream, or ivory (reserved for the bride)",
    "faq.attireList4": "Consider comfortable dress shoes for dancing",
    "faq.attireAnswer2": "The venue is fully air-conditioned for your comfort.",

    "faq.childrenQuestion": "Can I bring my children?",
    "faq.childrenAnswer1": "While we love your little ones, we have chosen to make our wedding an adult-only celebration to allow all our guests to relax and enjoy the evening.",
    "faq.childrenAnswer2": "Exception: Nursing infants are welcome.",
    "faq.childrenAnswer3": "If you need help finding childcare, please let us know and we can provide recommendations.",

    "faq.giftsQuestion": "What about gifts?",
    "faq.giftsAnswer1": "Your presence at our wedding is the greatest gift! However, if you wish to give a gift:",
    "faq.giftsList1": "We have registries at Amazon and Target (links above)",
    "faq.giftsList2": "Physical gifts can be sent to our home address",
    "faq.giftsList3": "Cards may be brought to the reception",
    "faq.giftsList4": "No boxed gifts at the venue, please",

    "faq.photosQuestion": "Can I take photos?",
    "faq.photosAnswer1": "We have a few guidelines for photography:",
    "faq.photosList1": "Ceremonia: Por favor, no tomes fotos — tenemos un fotógrafo profesional",
    "faq.photosList2": "Recepción: ¡Siéntete libre de tomar fotos y compartir tu alegría!",
    "faq.photosList3": "Comparte tus fotos con nosotros en: bellinfamily12@gmail.com",
    "faq.photosList4": "Proporcionaremos un hashtag especial para compartir en redes sociales",

    "faq.weatherQuestion": "What if there's bad weather?",
    "faq.weatherAnswer1": "No need to worry! Our venue is entirely indoor and climate-controlled. The ceremony and reception will proceed as planned regardless of weather conditions.",
    "faq.weatherAnswer2": "The covered entrance ensures you'll stay dry from car to venue.",

    "faq.accommodationsQuestion": "Are there nearby hotels?",
    "faq.accommodationsAnswer1": "Yes! We recommend these nearby accommodations:",
    "faq.accommodationsList1": "Hampton Inn & Suites (5 minutes away)",
    "faq.accommodationsList2": "Holiday Inn Express (7 minutes away)",
    "faq.accommodationsList3": "Marriott (10 minutes away)",
    "faq.accommodationsAnswer2": "Book early as June is peak season in Cape Coral!",

    // RSVP
    "rsvp.title": "Kindly RSVP",
    "rsvp.disclaimer": "If you’re attending as a couple, just check “Plus one.” Only one of you needs to fill out this form!",

    // Form Labels
    "form.fullNameLabel": "Full Name",
    "form.fullNamePlaceholder": "Your name",
    "form.emailLabel": "Email Address (Optional)",
    "form.emailPlaceholder": "your.email@example.com",
    "form.attendanceLabel": "Will you be joining us?",
    "form.selectOption": "Please select...",
    "form.yes": "Joyfully Accept",
    "form.no": "Regretfully Decline",
    "form.plusOne": "Will you be bringing a plus one?",
    "form.dietaryLabel": "Dietary Restrictions",
    "form.dietaryPlaceholder": "Please let us know of any dietary restrictions",
    "form.submitButton": "Send RSVP",
    "form.optional": "(optional)",

    // Admin Section
    "admin.title": "Admin Panel",
    "admin.prompt": "Please enter the admin password to view RSVPs:",
    "admin.loginButton": "Login",
    "admin.rsvpList": "RSVP List",
    "admin.tableTimestamp": "Timestamp",
    "admin.tableFullName": "Full Name",
    "admin.tableEmail": "Email",
    "admin.tableAttendance": "Attendance",
    "admin.tablePlusOne": "Plus One",
    "admin.tableDietary": "Dietary Restrictions",
    "admin.downloadButton": "Download as CSV",

    // Footer
    "footer.text": "Don't hesitate to call or text us if you have any hiccups or questions :)",

    // RSVP Alerts
    "rsvp.success": "Thank you for your RSVP! You will receive a ‘Save the Date’ email shortly.",
    "rsvp.success_no_email": "Thank you for your RSVP! Your response has been saved.",
    "rsvp.error": "Sorry, there was a problem sending your RSVP. Please try again."
  },
  es: {
    // Spanish translations (Same keys as English)
    // Replace with actual Spanish translations
    // Example:
    "page.title": "Celebración de la Boda de Riley & Aleida",

    "nav.logo": "R&A",
    "nav.celebrate": "Celebrar",
    "nav.ourStory": "Nuestra Historia",
    "nav.theBigDay": "El Gran Día",
    "nav.registry": "Nuestro Registro de Regalos",
    "nav.rsvp": "Por Favor, Confirma tu Asistencia",
    "nav.admin": "Administrador",

    "hero.title": "Riley & Aleida",
    "hero.dateLocation": "21 de Junio de 2025 • Cape Coral, FL",
    "hero.tagline": "Únete a nosotros para celebrar el amor, la risa y el felices para siempre.",
    "hero.countdownTitle": "Días Hasta Decir \"Sí, Acepto\":",

    "countdown.married": "¡Felizmente Casados!",

    "details.title": "Celebrar con Nosotros",
    "details.ceremonyTitle": "Ceremonia & Recepción",

    "story.title": "Nuestra Historia",
    "story.quoteAuthor": "— Hermann Hesse",
    "story.paragraph1": "Encontramos algo hermoso el uno en el otro.",
    "story.paragraph2": "Ahora no podemos esperar para celebrar este siguiente paso rodeados de amigos y familiares que nos han apoyado en cada paso del camino.",

    "schedule.title": "El Gran Día",
    "schedule.time1": "4:00 PM",
    "schedule.event1": "Llegada de Invitados",
    "schedule.details1": "Bebidas de bienvenida disponibles",
    "schedule.time2": "4:30 PM",
    "schedule.event2": "Comienza la Ceremonia",
    "schedule.details2": "Por favor, siéntate antes de las 4:25 PM",
    "schedule.time3": "5:15 PM",
    "schedule.event3": "Fotos Familiares",
    "schedule.details3": "Comienza la hora del cóctel",
    "schedule.time4": "6:30 PM",
    "schedule.event4": "Comienza la Recepción",
    "schedule.details4": "Gran entrada y bienvenida",
    "schedule.time5": "7:00 PM",
    "schedule.event5": "Primer Baile",
    "schedule.details5": "Seguido por bailes con los padres",
    "schedule.time6": "7:30 PM",
    "schedule.event6": "Servicio de Cena",
    "schedule.details6": "Brindis y discursos",
    "schedule.time7": "8:45 PM",
    "schedule.event7": "Corte del Pastel",
    "schedule.details7": "Servicio de postres",
    "schedule.time8": "9:00 PM",
    "schedule.event8": "Baile Abierto",
    "schedule.details8": "Incluyendo el lanzamiento del ramo y liga",

    "registry.title": "Nuestro Registro de Regalos",
    "registry.description": "Valoramos más tu presencia. Pero si deseas bendecirnos con un regalo, puedes explorar nuestros registros a continuación.",
    "registry.amazon": "Registro de Amazon",
    "registry.target": "Registro de Target",
    "registry.honeymoon": "Fondo de Luna de Miel",

    "faq.title": "Preguntas Frecuentes",
    "faq.contactQuestion": "¿Cómo puedo contactar a la pareja?",
    "faq.contactAnswer1": "Para cualquier pregunta o inquietud, por favor comunícate con:",
    "faq.contactRiley": "Riley: (561) 275-6954",
    "faq.contactAleida": "Aleida: (786) 985-8328",
    "faq.contactEmail": "Email: bellinfamily12@gmail.com",
    "faq.contactAnswer2": "¡Responderemos lo antes posible!",

    "faq.venueQuestion": "¿A qué hora debo llegar?",
    "faq.venueAnswer1": "Por favor, planea llegar antes de las 4:00 PM para permitir tiempo para:",
    "faq.venueList1": "Encontrar estacionamiento",
    "faq.venueList2": "Encontrar tu asiento preferido (asientos abiertos)",
    "faq.venueList3": "Saludar a otros invitados",
    "faq.venueAnswer2": "La ceremonia comenzará puntualmente a las 4:30 PM.",

    "faq.parkingQuestion": "¿Dónde debo estacionar?",
    "faq.parkingAnswer1": "El estacionamiento es gratuito en:",
    "faq.parkingList1": "Estacionamiento principal del Lake Kennedy Center",
    "faq.parkingList2": "Estacionamiento adicional cercano si es necesario",
    "faq.parkingAnswer2": "El lugar es fácilmente accesible desde el área de estacionamiento. Se verá como un estacionamiento normal y regular.",

    "faq.attireQuestion": "¿Qué debo vestir?",
    "faq.attireAnswer1": "Solicitamos atuendo de cóctel para nuestra celebración:",
    "faq.attireList1": "Hombres: Traje o chaqueta deportiva con pantalones de vestir",
    "faq.attireList2": "Mujeres: Vestido de cóctel o pantalón elegante",
    "faq.attireList3": "Por favor, evita blanco, crema o marfil (reservado para la novia)",
    "faq.attireList4": "Considera zapatos cómodos para bailar",
    "faq.attireAnswer2": "El lugar está completamente aireado para tu comodidad.",

    "faq.childrenQuestion": "¿Puedo traer a mis hijos?",
    "faq.childrenAnswer1": "Aunque amamos a tus pequeños, hemos decidido que nuestra boda sea una celebración solo para adultos para permitir que todos nuestros invitados se relajen y disfruten la noche.",
    "faq.childrenAnswer2": "Excepción: Se permiten bebés lactantes.",
    "faq.childrenAnswer3": "Si necesitas ayuda para encontrar cuidado infantil, por favor avísanos y podemos proporcionarte recomendaciones.",

    "faq.giftsQuestion": "¿Qué hay de los regalos?",
    "faq.giftsAnswer1": "¡Tu presencia en nuestra boda es el mejor regalo! Sin embargo, si deseas dar un regalo:",
    "faq.giftsList1": "Tenemos registros en Amazon y Target (enlaces arriba)",
    "faq.giftsList2": "Los regalos físicos pueden enviarse a nuestra dirección de casa",
    "faq.giftsList3": "Puedes traer tarjetas a la recepción",
    "faq.giftsList4": "Por favor, no traigas regalos en cajas al lugar",

    "faq.photosQuestion": "¿Puedo tomar fotos?",
    "faq.photosAnswer1": "Tenemos algunas pautas para la fotografía:",
    "faq.photosList1": "Ceremonia: Por favor, no tomes fotos — tenemos un fotógrafo profesional",
    "faq.photosList2": "Recepción: ¡Siéntete libre de tomar fotos y compartir tu alegría!",
    "faq.photosList3": "Comparte tus fotos con nosotros en: bellinfamily12@gmail.com",
    "faq.photosList4": "Proporcionaremos un hashtag especial para compartir en redes sociales",

    "faq.weatherQuestion": "What if there's bad weather?",
    "faq.weatherAnswer1": "No need to worry! Our venue is entirely indoor and climate-controlled. The ceremony and reception will proceed as planned regardless of weather conditions.",
    "faq.weatherAnswer2": "The covered entrance ensures you'll stay dry from car to venue.",

    "faq.accommodationsQuestion": "Are there nearby hotels?",
    "faq.accommodationsAnswer1": "Yes! We recommend these nearby accommodations:",
    "faq.accommodationsList1": "Hampton Inn & Suites (5 minutes away)",
    "faq.accommodationsList2": "Holiday Inn Express (7 minutes away)",
    "faq.accommodationsList3": "Marriott (10 minutes away)",
    "faq.accommodationsAnswer2": "Book early as June is peak season in Cape Coral!",

    // RSVP
    "rsvp.title": "Kindly RSVP",
    "rsvp.disclaimer": "If you’re attending as a couple, just check “Plus one.” Only one of you needs to fill out this form!",

    // Form Labels
    "form.fullNameLabel": "Full Name",
    "form.fullNamePlaceholder": "Your name",
    "form.emailLabel": "Email Address (Optional)",
    "form.emailPlaceholder": "your.email@example.com",
    "form.attendanceLabel": "Will you be joining us?",
    "form.selectOption": "Please select...",
    "form.yes": "Joyfully Accept",
    "form.no": "Regretfully Decline",
    "form.plusOne": "Will you be bringing a plus one?",
    "form.dietaryLabel": "Dietary Restrictions",
    "form.dietaryPlaceholder": "Please let us know of any dietary restrictions",
    "form.submitButton": "Send RSVP",
    "form.optional": "(optional)",

    // Admin Section
    "admin.title": "Admin Panel",
    "admin.prompt": "Please enter the admin password to view RSVPs:",
    "admin.loginButton": "Login",
    "admin.rsvpList": "RSVP List",
    "admin.tableTimestamp": "Timestamp",
    "admin.tableFullName": "Full Name",
    "admin.tableEmail": "Email",
    "admin.tableAttendance": "Attendance",
    "admin.tablePlusOne": "Plus One",
    "admin.tableDietary": "Dietary Restrictions",
    "admin.downloadButton": "Download as CSV",

    // Footer
    "footer.text": "Don't hesitate to call or text us if you have any hiccups or questions :)",

    // RSVP Alerts
    "rsvp.success": "Thank you for your RSVP! You will receive a ‘Save the Date’ email shortly.",
    "rsvp.success_no_email": "Thank you for your RSVP! Your response has been saved.",
    "rsvp.error": "Sorry, there was a problem sending your RSVP. Please try again."
  }
  // Add more languages as needed
};

// -----------------------------
// Function to set language
// -----------------------------
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    } else if (translations['en'] && translations['en'][key]) {
      // Fallback to English if translation is missing
      element.textContent = translations['en'][key];
    } else {
      console.warn(`Missing translation for key: ${key}`);
    }
  });

  // Handle placeholders if you have any
  const placeholders = document.querySelectorAll('[data-placeholder]');
  placeholders.forEach(element => {
    const key = element.getAttribute('data-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.setAttribute('placeholder', translations[lang][key]);
    } else if (translations['en'] && translations['en'][key]) {
      element.setAttribute('placeholder', translations['en'][key]);
    } else {
      console.warn(`Missing placeholder translation for key: ${key}`);
    }
  });

  // Save preference
  localStorage.setItem('preferredLanguage', lang);
}

// -----------------------------
// Event Listener for Language Selector
// -----------------------------
document.getElementById('languageSelect').addEventListener('change', (e) => {
  setLanguage(e.target.value);
});

// -----------------------------
// Initialize Language on Page Load
// -----------------------------
document.addEventListener('DOMContentLoaded', () => {
  let savedLanguage = localStorage.getItem('preferredLanguage');
  if (!savedLanguage) {
    const browserLang = navigator.language || navigator.userLanguage;
    savedLanguage = browserLang.startsWith('es') ? 'es' : 'en';
  }
  document.getElementById('languageSelect').value = savedLanguage;
  setLanguage(savedLanguage);
});

// -----------------------------
// Countdown Timer Localization Adjustment
// -----------------------------
function updateCountdown() {
  const countdown = document.getElementById("countdown-timer");
  const weddingDate = new Date("June 21, 2025").getTime();
  const now = Date.now();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Get current language
  const currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
  const marriedText = translations[currentLanguage]["countdown.married"] || translations['en']["countdown.married"];
  const dayText = currentLanguage === 'es' ? ' días' : ' days';
  countdown.textContent = distance < 0 ? marriedText : `${days}${dayText}`;
}

// Update countdown immediately and set interval
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24);

// -----------------------------
// RSVP Form Submission via localStorage
// -----------------------------
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const attendance = document.getElementById("attendance").value;
  const plusOne = document.getElementById("plusOne").checked ? "Yes" : "No";
  const dietary = document.getElementById("dietary").value.trim();

  // Validate required fields
  if (!fullName || !attendance) {
    const currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
    const selectOption = translations[currentLanguage]["form.selectOption"] || translations['en']["form.selectOption"];
    showFeedback(selectOption, "error");
    return;
  }

  // Retrieve existing RSVPs from localStorage
  let rsvps = JSON.parse(localStorage.getItem("rsvps")) || [];

  // Create new RSVP object
  const newRSVP = {
    timestamp: new Date().toLocaleString(),
    fullName,
    email: email || "N/A",
    attendance,
    plusOne,
    dietary: dietary || "N/A"
  };

  // Append new RSVP to the array
  rsvps.push(newRSVP);

  // Save updated RSVPs back to localStorage
  localStorage.setItem("rsvps", JSON.stringify(rsvps));

  // Show success message
  const currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
  const successMessage = translations[currentLanguage]["rsvp.success"] || translations['en']["rsvp.success"];
  showFeedback(successMessage, "success");

  // Reset the form
  document.getElementById("rsvpForm").reset();
});

// Function to display feedback messages
function showFeedback(message, type) {
  const feedbackDiv = document.getElementById("rsvpFeedback");
  feedbackDiv.textContent = message;
  feedbackDiv.classList.remove("success", "error");
  feedbackDiv.classList.add(type);
}

// -----------------------------
// Navigation Toggle for Mobile
// -----------------------------
document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("active");
});

// Auto-collapse nav menu on link click (for mobile)
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navLinksContainer = document.getElementById('navLinks');
    if (navLinksContainer.classList.contains('active')) {
      navLinksContainer.classList.remove('active');
    }
  });
});

// -----------------------------
// Admin Section Functionality
// -----------------------------
const adminPasswordValue = "Peanutbutter3&d"; // Set your desired admin password

document.getElementById("adminLoginButton").addEventListener("click", () => {
  const enteredPassword = document.getElementById("adminPassword").value;
  const adminFeedback = document.getElementById("adminFeedback");

  if (enteredPassword === adminPasswordValue) {
    adminFeedback.textContent = "";
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("adminContent").style.display = "block";
    loadRSVPs();
  } else {
    const currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
    const errorMessage = currentLanguage === 'es' ? "Contraseña incorrecta. Por favor, inténtalo de nuevo." : "Incorrect password. Please try again.";
    adminFeedback.textContent = errorMessage;
    adminFeedback.classList.add("error");
    adminFeedback.classList.remove("success");
  }
});

// Function to load RSVPs from localStorage
function loadRSVPs() {
  const rsvps = JSON.parse(localStorage.getItem("rsvps")) || [];
  const rsvpTableBody = document.querySelector("#rsvpTable tbody");
  rsvpTableBody.innerHTML = ""; // Clear existing data

  rsvps.forEach((rsvp) => {
    const row = document.createElement("tr");

    // Create cells
    const timestampCell = document.createElement("td");
    timestampCell.textContent = rsvp.timestamp || "N/A";
    row.appendChild(timestampCell);

    const fullNameCell = document.createElement("td");
    fullNameCell.textContent = rsvp.fullName || "N/A";
    row.appendChild(fullNameCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = rsvp.email || "N/A";
    row.appendChild(emailCell);

    const attendanceCell = document.createElement("td");
    attendanceCell.textContent = rsvp.attendance || "N/A";
    row.appendChild(attendanceCell);

    const plusOneCell = document.createElement("td");
    plusOneCell.textContent = rsvp.plusOne || "N/A";
    row.appendChild(plusOneCell);

    const dietaryCell = document.createElement("td");
    dietaryCell.textContent = rsvp.dietary || "N/A";
    row.appendChild(dietaryCell);

    // Append row to table
    rsvpTableBody.appendChild(row);
  });
}

// Function to download RSVPs as CSV
document.getElementById("downloadCSV").addEventListener("click", () => {
  const rsvps = JSON.parse(localStorage.getItem("rsvps")) || [];
  if (rsvps.length === 0) {
    alert("No RSVPs to download.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Timestamp,Full Name,Email,Attendance,Plus One,Dietary Restrictions\n";

  rsvps.forEach((rsvp) => {
    const row = [
      `"${rsvp.timestamp || ""}"`,
      `"${rsvp.fullName || ""}"`,
      `"${rsvp.email || ""}"`,
      `"${rsvp.attendance || ""}"`,
      `"${rsvp.plusOne || ""}"`,
      `"${rsvp.dietary || ""}"`
    ].join(",");
    csvContent += row + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "rsvps.csv");
  document.body.appendChild(link); // Required for FF

  link.click();
  document.body.removeChild(link);
});

// -----------------------------
// Preloader Script
// -----------------------------
// Hide preloader after window load
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('hidden');
});

// -----------------------------
// Petal Animation Initialization
// -----------------------------
function createPetals() {
  const petalContainer = document.querySelector('.petal-container');
  const numPetals = 5; // Adjust for desired effect
  const petalEmojis = ["🌸", "🌺", "🌻", "🌷", "🌹"]; // Add more emojis if desired

  for (let i = 0; i < numPetals; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${Math.random() * 5 + 5}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    
    // Assign a random emoji to each petal
    const emoji = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
    petal.textContent = emoji;

    petalContainer.appendChild(petal);
  }
}

function initPetalScrollAnimation() {
  const petalContainer = document.querySelector('.petal-container');
  const heroSection = document.querySelector('.hero');

  const observerOptions = {
    root: null,
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // User has scrolled past the hero section
        petalContainer.classList.add('hidden');
      } else {
        // User is at the top of the page
        petalContainer.classList.remove('hidden');
      }
    });
  }, observerOptions);

  observer.observe(heroSection);
}

document.addEventListener('DOMContentLoaded', () => {
  createPetals();
  initPetalScrollAnimation();
});
