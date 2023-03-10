import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "An AI based content ": "An AI based content ",
            "generator": "generator",
            "The future of AI content generator": "The future of AI content generator",
            "In a few minutes you can create": "In a few minutes you can create",
            "output of high quality Content": "output of high quality Content",
            "Home": "Home",
            "Features": "Features",
            "Blog": "Blog",
            "Pricing": "Pricing",
            "Login": "Login",
            "Signup": "Sign Up",
            "Product": "Product",
            "Start now": "Start now",
            "Create Account": "Create Account..",
            "Get access to Social Media, Email, articles, Advertisments, Images and much more.": "Get access to Social Media, Email, articles, Advertisments, Images and much more.",
            "Phone number": "Phone number",
            "Or continue with": "Or continue with",
            "Confused to write an email?": "Confused about writing an email?",
            "With us, writing an email has become easier. Put the topic you want to write about and leave the content to us": "With Araby AI, writing an email just became easier. Simply enter the topic you want to write about and leave all the hassle to us.",
            "From": "From:",
            "To": "To:",
            "Write": "Write",
            "The subject": "subject:",
            "Write the subject here...": "Write the subject here...",
            "Your name": "Your name",
            "The addressee's name": "The addressee's name",
            "We turn your text into an image!": "We turn your text into an image!",
            "Write what you want to visualise, and we will turn your imagination into reality!": "Write what you want to visualise, and we will turn your imagination into reality!",
            "flying car in space...": "flying car in space...",
            "Create Image": "Create Image",
            "New Article": "New Article",
            "social media content": "social media content",
            "email": "email",
            "websites": "websites",
            "and much more...": "and much more",
            "Type Few Keywords Describing Your Brand": "Type Few Keywords Describing Your Brand",
            "Just, Try to write the subject": "Just, Try to write the subject",
            "write your topic here...": "write your topic here...",
            "write": "write",
            "or": "or",
            "Tweeting with the help of AI": "Tweeting with the help of AI",
            "Do you have the idea but confused about what to tweet? Do not worry, AI is here to help, try it out now!": "Do you have the idea but confused about what to tweet? Do not worry, AI is here to help, try it out now!",
            "Tweet": "Tweet",
            "please type here...": "please type here...",
            "Who is Araby AI for?": "Who is Araby AI for?",
            "If you try any of our services, you'll discover a platform that writers can't live without.": "If you try any of our services, you'll discover a platform that writers can't live without.",
            "Content Marketing Teams": "Content Marketing Teams",
            "kickstart your content now with simple steps and improve your brand's voice and tone.": "kickstart your content now with simple steps and improve your brand's voice and tone.",
            "Copywriters": "Copywriters",
            "Never face writers block again. Generate creative content that aligns with your ideas.": "Never face writers block again. Generate creative content that aligns with your ideas.",
            "Entrepreneurs": "Entrepreneurs",
            "Build your brand's voice, get your thoughts out to the world and educate your customers without the need for a dedicated copywriting staff.": "Build your brand's voice, get your thoughts out to the world and educate your customers without the need for a dedicated copywriting staff.",
            "Company": "Company",
            "Features": "Features",
            "Terms and Conditions": "Terms and Conditions",
            "Privacy Policy": "Privacy Policy",
            "Contact us": "Contact us",
            "Help": "Help",
            "Share feedback": "Share feedback",
            "Report a Bug": "Report a Bug",
            "Report an Outage": "Report an Outage",
            "Support": "Support",
            "How can we help you?": "How can we help you?",
            "Have a question, Or just want to say hello?, fill the form below": "Have a question, Or just want to say hello?, fill the form below",
            "Email": "Email",
            "Name": "Name",
            "Your message": "Your message",
            "Send": "Send",
            "Join Now And Receive A Special Gift From Us": "Join Now And Receive A Special Gift From Us",
            "Enter your email": "Enter your email",
            "Continue": "Continue",
            "Register using mobile number?": "Register using mobile number?",
            "Welcome": "Welcome",
            "Please Sign in to continue": "Please Sign in to continue",
            "Password": "Password",
            "Confirm password": "Confirm password",
            "Already have an account?": "Already have an account?",
            "Register": "Register",
            "Signup using Mobile": "Signup using Mobile",
            "Creating Magic": "Creating Magic",
            "Enter phone number": "Enter phone number",
            "Login using Mobile": "Login using Mobile",
            "Login using Email": "Login using Email",
            "Forgot password?": "Forgot password?",
            "Create account": "Create account",
            "Signup using Email": "Signup using Email",
            "Enter your email address associated with your account and we'll send you a link to reset your password": "Enter your email address associated with your account and we'll send you a link to reset your password",
            "Send OTP": "Send OTP",
            "Back to sign in": "Back to sign in",

        }
    },
    ar: {
        translation: {
            "Learn more about Araby AI": " ???????? ?????? Araby AI ",
            "An AI based content ": "?????????? ?????????????? ??????????????",
            "generator": "??????????????????",
            "New Article": "???????????? ??????????",
            "email": "?????????? ???????? ????????????????",
            "websites": "???????? ????????????????",
            "and much more...": "??????????????",
            "social media content": "?????????? ?????????? ??????????????",
            "In a few minutes you can create": "?????????? ?????? ???????? ???? ?????????? ???????????? ???????? ????????",
            "ArabAI technology makes it easy to create new big posts, social media content, email, websites and more - with justs a minute": "???????? ?????????? ArabAI ?????????? ?????????????? ?????????? ?????????? ???????????? ?????????? ???????????????? ?????????? ???????????????? ???????????? ?????? ?????????????? - ???? ???????? ?????????? ?????????? ??????",
            "output of high quality Content": "?????????? ?????????? ???????? ????????????",
            "Home": "???????????? ????????????????",
            "Features": "??????????????",
            "Blog": "????????????????",
            "Pricing": "??????????????",
            "Login": "?????????? ????????????",
            "Signup": "???????? ????????",
            "Product": "????????????????",
            "Start now": "???????? ????????",
            "Create Account": "..??????????????????",
            "Get access to Social Media, Email, articles, Advertisments, Images and much more.": "???????? ?????? ?????????????? ???????????? ?????? ?????????????? ???????????????????? ?????????????? ???????????????????? ?????????????????? ???????????????????? ???????????? ???????? ?????? ????????????.",
            "Phone number": "?????? ????????????",
            "Or continue with": "???? ????????",
            "Confused to write an email?": "?????????? ???????????? ????????????????",
            "With us, writing an email has become easier. Put the topic you want to write about and leave the content to us": "?????????? ???????? ?????????? ?????????????? ?????????? ???? ?????????????? ???????? ?????? ???????? ?????? ???????? ?????????????? ??????????",
            "From": "????:",
            "To": "??????:",
            "Write": "????????",
            "Write the subject here...": "???????? ?????????? ?????????????? ??????...",
            "Your name": "????????",
            "The addressee's name": "?????? ???????????? ????????",
            "The subject": "??????????????:",
            "We turn your text into an image!": "???????? ???? ???????? ?????? ????????!",
            "Write what you want to visualise, and we will turn your imagination into reality!": "???????? ???????? ???????? ???????????? ???????? ?????? ?????????? ???????? ???? ???? ???? ??????????",
            "flying car in space...": "?????????? ?????????? ???? ????????????...",
            "Create Image": "???????? ????????",
            "Type Few Keywords Describing Your Brand": "???????? ?????????? ?????????????? ?????????? ?????? ???????????? ????????????????",
            "Just, Try to write the subject": "???????????? ?????? ?????????? ?????????? ??????????????",
            "write your topic here...": "...???????? ???????????? ??????",
            "write": "??????????",
            "or": "????",
            "Tweeting with the help of AI": "?????? ???????? ???????????? ?????????????? ???????????? ??????????????????",
            "Do you have the idea but confused about what to tweet? Do not worry, AI is here to help, try it out now!": "???????? ???????????? ?? ?????????? ???? ???????? ???????????????? ???? ???????? ???? ???????????? ?????????????????? ???? ???????????? ?????? ????????!",
            "Tweet": "??????",
            "please type here...": "???????? ??????",
            "Who is Araby AI for?": "?????? ?????? Araby AI",
            "If you try any of our services, you'll discover a platform that writers can't live without.": ".?????? ???????? ???? ???????? ???? ?????????????? ?? ???????????? ???? ???????? ???? ???????????? ???????? ???? ???????? ???????????? ?????????? ????????????",
            "Content Marketing Teams": "?????? ?????????? ??????????????",
            "kickstart your content now with simple steps and improve your brand's voice and tone.": "???????? ?????????? ???? ?????????? ?????????? ???????????? ?????????????? ???????? ???????????? ???????????????? ?????? ?????????? ???? ?????????? ?????????? ?????????? ",
            "Copywriters": "?????????? ??????????????????",
            "Never face writers block again. Generate creative content that aligns with your ideas.": ".?????? ?????????? ???????? ?????????? ???????????? ?????????? ?????? ???????????? ?????????? ?????? ?????????????? ????",
            "Entrepreneurs": "??????????",
            "Build your brand's voice, get your thoughts out to the world and educate your customers without the need for a dedicated copywriting staff.": "???? ?????????? ???????????? ????????????????. ?????????? ???????????? ?????? ???????????? ???? ?????? ???????????? ?????? ?????????????????? ?????????? ?????????? ???? ???????? ??????????????????",
            "Company": "????????????",
            "Features": "??????????????",
            "Terms and Conditions": "???????????? ????????????????",
            "Privacy Policy": "?????????? ????????????????",
            "Contact us": "?????????? ????????",
            "Help": "????????????????",
            "Share feedback": "???????????? ??????????????????",
            "Report a Bug": "?????????????? ???? ??????????",
            "Support": "??????????",
            "Report an Outage": "?????????????? ???? ??????",
            "How can we help you?": "?????? ???????????? ????????????????",
            "Have a question, Or just want to say hello?, fill the form below": "???????? ???????? ?? ???? ?????? ???????? ???? ???????? ??????????????. ???????? ?????????????? ??????????",
            "Name": "??????????",
            "Email": "???????????? ????????????????????",
            "Your message": "????????????",
            "Send": "??????????",
            "Join Now And Receive A Special Gift From Us": "???????? ???????? ???????????? ???????? ???????? ??????",
            "Enter your email": "???????????? ????????????????????",
            "Continue": "????????????",
            "Register using mobile number?": "?????????????? ???????????????? ?????? ??????????",
            "Welcome": "????????????",
            "Please Sign in to continue": "??????????",
            "Password": "????????????????????",
            "Confirm password": "?????????? ???????? ????????????",
            "Already have an account?": "???? ???????? ???????? ??????????????",
            "Register": "???????? ????????",
            "Signup using Mobile": "?????????????? ???????????????? ????????????",
            "Creating Magic": "???? ?????? ????????????",
            "Enter phone number": "???????? ?????? ??????????",
            "Login using Email": " ?????????? ???????????? ???????????????? ???????????? ???????????????????? ",
            "Login using Mobile": " ?????????? ???????????? ???????????????? ???????????? ",
            "Forgot password?": "???????? ???????? ??????????????",
            "Create account": "?????????? ????????",
            "Signup using Email": "?????????????? ???????????????? ???????????? ????????????????????",
            "Enter your email address associated with your account and we'll send you a link to reset your password": "???? ???????? ???? ???????????? ?????????? ???????????????????? ?????????? ?????????????? ???????? ???????? ???????? ???????? ??????????????",
            "Back to sign in": "???????????? ???????????? ????????????",
            "Send OTP": "?????????? ???????? ??????????????"

        }
    }
}
const DETECTION_OPTIONS = {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
};
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        detection: DETECTION_OPTIONS,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;