function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
}

function enableScroll() {
    document.body.style.overflow = null;
}

function scrollToTop() {
    window.scrollTo(0,0);
}

let app = Vue.createApp({
    data: () => ({
        page: "home",
        sortedQna: null,
        sortedAnswers: null,
        qna: [
            {
                questionid: "000005",
                author: "Person 2",
                authorPic: "pf.png",
                authorAdditional: "Parent",
                date: "20200402000000",
                age: "1y",
                title: "Earlier What is the answer for this question? What is the answer for this question?",
                content: "What is the answer for this question?",
                img: "images/profilePics/pm.png",
                tags: ["GPPW", "Biology", "Geography", "Physics", "Chemistry"],
                solved: "Unsolved",
                comments: "15",
                upvotes: "150",
                hotUpvotes: "5",
                upvote: "",
            },
            {
                questionid: "000006",
                author: "Person 2",
                authorPic: "sm.png",
                authorAdditional: "12C",
                date: "20190802000000",
                age: "2y",
                title: "What is the answer for this question? What is the answer for this question?",
                content: "What is the answer for this question?",
                img: "images/profilePics/tf.png",
                tags: ["Math", "PE", "Geography"],
                solved: "Unsolved",
                comments: "1",
                upvotes: "150",
                hotUpvotes: "2",
                upvote: "downvoted",
            },
            {
                questionid: "000001",
                author: "Person 1",
                authorPic: "pm.png",
                authorAdditional: "Parent",
                date: "20210830000000",
                age: "1d",
                title: "Question 1",
                content: "What is the answer for this question?",
                img: "null",
                tags: ["Other"],
                solved: "Solved",
                comments: "25",
                upvotes: "-11",
                hotUpvotes: "0",
                upvote: "",
            },
            {
                questionid: "000003",
                author: "Person 2",
                authorPic: "tm.png",
                authorAdditional: "Math",
                date: "20210629000000",
                age: "2mo",
                title: "What is the answer for this question? What is the answer for this question?",
                content: "What is the answer for this question?",
                img: "images/profilePics/tm.png",
                tags: ["Geography", "Physics", "English"],
                solved: "Unsolved",
                comments: "3",
                upvotes: "215",
                hotUpvotes: "50",
                upvote: "downvoted",
            },
            {
                questionid: "000002",
                author: "GuyWith ALongName",
                authorPic: "tf.png",
                authorAdditional: "Physics",
                date: "20210730000000",
                age: "1mo",
                title: "What is the answer for this question?",
                content: "What is the answer for this question?",
                img: "images/profilePics/sf.png",
                tags: ["Physics", "Chemistry"],
                solved: "Solved",
                comments: "13",
                upvotes: "20",
                hotUpvotes: "8",
                upvote: "upvoted",
            },
            {
                questionid: "000004",
                author: "Person 2",
                authorPic: "sf.png",
                authorAdditional: "12B",
                date: "20200602000000",
                age: "1y",
                title: "What is the answer for this question? What is the answer for this question?",
                content: "",
                img: "images/profilePics/pf.png",
                tags: ["Math", "Biology", "Geography", "Physics", "Chemistry"],
                solved: "Unsolved",
                comments: "6",
                upvotes: "10",
                hotUpvotes: "4",
                upvote: "upvoted",
            },
        ],
        question: [
            {
                questionid: "000002",
                author: "GuyWith ALongName",
                authorPic: "tf.png",
                authorAdditional: "Physics",
                date: "20210730000000",
                age: "1mo",
                title: "What is the answer for this question?",
                content: "What is the answer for this question?",
                img: "images/profilePics/sf.png",
                tags: ["Physics", "Chemistry"],
                solved: "Solved",
                comments: "13",
                upvotes: "20",
                hotUpvotes: "8",
                upvote: "upvoted",
            },
            [
                {
                    answerid: "000001",
                    author: "Name Surname",
                    authorPic: "sm.png",
                    authorAdditional: "12C",
                    date: "20200402000000",
                    age: "1y",
                    content: "This is the answer for your question.",
                    img: "images/profilePics/pm.png",
                    answer: "True",
                    upvotes: "150",
                    upvote: "",
                },
                {
                    answerid: "000002",
                    author: "Name Surname",
                    authorPic: "sf.png",
                    authorAdditional: "12B",
                    date: "20200402000000",
                    age: "1y",
                    content: "This is the answer for your question.",
                    img: "images/profilePics/tm.png",
                    answer: "False",
                    upvotes: "150",
                    upvote: "",
                },
                {
                    answerid: "000003",
                    author: "Name Surname",
                    authorPic: "tm.png",
                    authorAdditional: "Math",
                    date: "20200402000000",
                    age: "1y",
                    content: "This is the answer for your question.",
                    img: "images/profilePics/sm.png",
                    answer: "False",
                    upvotes: "150",
                    upvote: "",
                },
                {
                    answerid: "000004",
                    author: "Name Surname",
                    authorPic: "pm.png",
                    authorAdditional: "Parent",
                    date: "20200402000000",
                    age: "1y",
                    content: "This is the answer for your question.",
                    img: "images/profilePics/pf.png",
                    answer: "False",
                    upvotes: "150",
                    upvote: "",
                },
                {
                    answerid: "000005",
                    author: "Name Surname",
                    authorPic: "sm.png",
                    authorAdditional: "12C",
                    date: "20200402000000",
                    age: "1y",
                    content: "This is the answer for your question.",
                    img: "images/profilePics/tf.png",
                    answer: "False",
                    upvotes: "150",
                    upvote: "",
                },
                {
                    answerid: "000006",
                    author: "Name Surname",
                    authorPic: "sm.png",
                    authorAdditional: "12C",
                    date: "20200402000000",
                    age: "1y",
                    content: "This is the answer for your question.",
                    img: "images/profilePics/sf.png",
                    answer: "False",
                    upvotes: "150",
                    upvote: "",
                },
            ]
        ],
        loggedin: false,
        sidebar: false,
        signinForm: false,
        signupForm: false,
        formImage: false,
        formImageImg: null,
        addQna: false,
        addAnswer: false,
        addQnaImg: [],
        addAnswerImg: [],
        qnaSolved: "All",
        qnaSorting: "Hot",
        qnaTags: [],
        questionTags: [],
        qnaSearch: "",
        answersSorting: "Top",
        loginErrorMessage: false,
        registerErrorMessage: false,
        parentErrorMessage: false,
        passwordErrorMessage: false,
        passwordsErrorMessage: false,
        questionErrorMessage: false,
        answerErrorMessage: false,
        questionMessage: false,
        answerMessage: false,
        loginMessage: false,
        notLoggedInMessage: false,
        user: {
            iin: null,
            fname: null,
            lname: null,
            sex: null,
            status: null,
            additional: null,
            childiin: null,
            pic: null,
            darkTheme: false,
        }
    }),
    created: function() {
        if(window.localStorage.getItem("loggedin") !== null) {
            window.sessionStorage.setItem("loggedin", window.localStorage.getItem("loggedin"))
            window.sessionStorage.setItem("iin", window.localStorage.getItem("iin"))
            window.sessionStorage.setItem("fname", window.localStorage.getItem("fname"))
            window.sessionStorage.setItem("lname", window.localStorage.getItem("lname"))
            window.sessionStorage.setItem("sex", window.localStorage.getItem("sex"))
            window.sessionStorage.setItem("status", window.localStorage.getItem("status"))
            window.sessionStorage.setItem("additional", window.localStorage.getItem("additional"))
            window.sessionStorage.setItem("childiin", window.localStorage.getItem("childiin"))
            window.sessionStorage.setItem("pic", window.localStorage.getItem("pic"))
            window.sessionStorage.setItem("darkTheme", window.localStorage.getItem("darkTheme"))
        }
        else if(window.sessionStorage.getItem("loggedin") === null) {
            window.sessionStorage.setItem("loggedin", "false")
            window.sessionStorage.setItem("iin", "null")
            window.sessionStorage.setItem("fname", "null")
            window.sessionStorage.setItem("lname", "null")
            window.sessionStorage.setItem("sex", "null")
            window.sessionStorage.setItem("status", "null")
            window.sessionStorage.setItem("additional", "null")
            window.sessionStorage.setItem("childiin", "null")
            window.sessionStorage.setItem("pic", "images/profilePics/null.png")
            window.sessionStorage.setItem("darkTheme", "false")
        }

        this.loggedin = window.sessionStorage.getItem("loggedin") === "true"
        this.user.iin = window.sessionStorage.getItem("iin")
        this.user.fname = window.sessionStorage.getItem("fname")
        this.user.lname = window.sessionStorage.getItem("lname")
        this.user.sex = window.sessionStorage.getItem("sex")
        this.user.status = window.sessionStorage.getItem("status")
        this.user.additional = window.sessionStorage.getItem("additional")
        this.user.childiin = (window.sessionStorage.getItem("childiin") === "null") ? null:window.sessionStorage.getItem("childiin")
        this.user.pic = window.sessionStorage.getItem("pic")
        this.user.darkTheme = window.sessionStorage.getItem("darkTheme") === "true"

        this.page = (window.sessionStorage.getItem("page") !== null) ? window.sessionStorage.getItem("page"):"home"

        /* qna-ды датабейздан алып кою керек 
        this.qna =  */

        this.sortedQna = this.qna.sort((a,b) => (Number(b.hotUpvotes) - Number(a.hotUpvotes)))
        this.sortedAnswers = this.question[1]
        for (answer of this.question[1]) {
            if (answer.answer == "True") {
                this.answer = answer;
                break;
            }
        }
    },
    methods: {
        pageChange(page) {
            if(page.substr(0, 8)==="question") {
                for(q of this.qna) {
                    if(page.substr(8, 5)===q.questionid) {
                        this.question[0] = q
                        /* ответы алу керек */
                        break
                    }
                }
                page = "question"
            }
            window.sessionStorage.setItem("page", page)
            this.page = window.sessionStorage.getItem("page")
        },
        openFilter() {
            this.$el.querySelector('.header__filter').style.visibility = "visible"
            this.$el.querySelector('.header__filter__button').style.visibility = "visible"
            this.closeSearch()
        },
        closeFilter() {
            this.$el.querySelector('.header__filter').style.visibility = "hidden"
            this.$el.querySelector('.header__filter__button').style.visibility = "hidden"
            this.$el.querySelector('.header__filter__tags').checked = false
        },
        openFilterQ() {
            this.$el.querySelector('.header__filter__q').style.visibility = "visible"
            this.$el.querySelector('.header__filter__button__q').style.visibility = "visible"
        },
        closeFilterQ() {
            this.$el.querySelector('.header__filter__q').style.visibility = "hidden"
            this.$el.querySelector('.header__filter__button__q').style.visibility = "hidden"
        },
        openSearch() {
            this.$el.querySelector('.header__search').style.visibility = "visible"
            this.$el.querySelector('.header__search__button').style.visibility = "visible"
            window.setTimeout(() => this.$el.querySelector('.header__search__input').focus(), 400)
            this.closeFilter()
        },
        closeSearch() {
            this.$el.querySelector('.header__search').style.visibility = "hidden"
            this.$el.querySelector('.header__search__button').style.visibility = "hidden"
        },
        statusChange() {
            if(this.$el.querySelector(".form__status").value=="Student") {
                this.$el.querySelector(".form__class").style.display = "block";
                this.$el.querySelector(".form__subject").style.display = "none";
                this.$el.querySelector(".form__childIIN").style.display = "none";
            }
            else if(this.$el.querySelector(".form__status").value=="Teacher") {
                this.$el.querySelector(".form__class").style.display = "none";
                this.$el.querySelector(".form__subject").style.display = "block";
                this.$el.querySelector(".form__childIIN").style.display = "none";
            }
            else {
                this.$el.querySelector(".form__class").style.display = "none";
                this.$el.querySelector(".form__subject").style.display = "none";
                this.$el.querySelector(".form__childIIN").style.display = "block";
            }
        },
        scroll() {
            scrollToTop()
        },
        theme() {
            window.sessionStorage.setItem("darkTheme", (window.sessionStorage.getItem("darkTheme") === "true") ? "false":"true")
            if(window.localStorage.getItem("loggedin") !== null) {
                window.localStorage.setItem("darkTheme", (window.localStorage.getItem("darkTheme") === "true") ? "false":"true")
            }
            this.user.darkTheme = window.sessionStorage.getItem("darkTheme") === "true"
            /* датабейздага darkTheme = !darkTheme дисн */
        },
        clearSignin() {
            this.$el.querySelector(".signin-form__iin").value = "";
            this.$el.querySelector(".signin-form__password").value = "";
            this.$el.querySelector(".signin-form__remember").checked = false;
        },
        clearSignup() {
            this.$el.querySelector(".form__iin").value = ""
            this.$el.querySelector(".form__fname").value = ""
            this.$el.querySelector(".form__lname").value = ""
            this.$el.querySelector(".form__sex").value = "Male"
            this.$el.querySelector(".form__status").value = "Student"
            this.statusChange()
            this.$el.querySelector(".form__class").value = "7A"
            this.$el.querySelector(".form__subject").value = "Art"
            this.$el.querySelector(".form__childIIN").value = ""
            this.$el.querySelector(".form__password").value = ""
            this.$el.querySelector(".form__password2").value = ""
            this.$el.querySelector(".form__remember").checked = false
        },
        clearAddQna() {
            this.$el.querySelector(".form__title__qna").value = "";
            this.$el.querySelector(".form__content__qna").value = "";
            this.$el.querySelector(".form__img__upload").value = "";
            this.questionTags = []
        },
        clearAddAnswer() {
            this.$el.querySelector(".form__content__qna").value = "";
            this.$el.querySelector(".form__img__upload").value = "";
        },
        signin() {
            var signinIIN = (this.$el.querySelector(".signin-form__iin").value).replace(/^\s+|\s+$/gm,'')
            var signinPassword = this.$el.querySelector(".signin-form__password").value
            var signinRemember = this.$el.querySelector(".signin-form__remember").checked
            if(signinIIN==="" || signinPassword==="" /* || датабейзда бундай иин жок || пароль дурыс емес */) { 
                this.loginErrorMessage = true
                setTimeout(() => { this.loginErrorMessage = false; }, 3000);
            }
            else {
                /* ИИН бойынша букіл данныйды алу 
                var fname = 
                var lname = 
                var sex = 
                var status = 
                if(датабейздагы статус=="Parent") {
                    var additional = "Parent"
                    var childiin = датабейздагы additional
                }
                else {
                    var additional = 
                    var childiin = "null"
                }
                var pic = 
                var darkTheme =  */

                window.localStorage.clear()
                window.sessionStorage.clear()

                this.loggedin = true
                this.user.iin = signinIIN
                this.user.fname = fname
                this.user.lname = lname
                this.user.sex = sex
                this.user.status = status
                this.user.additional = additional
                this.user.childiin = childiin
                this.user.pic = pic
                this.user.darkTheme = darkTheme

                window.sessionStorage.setItem("loggedin", "true")
                window.sessionStorage.setItem("iin", signinIIN)
                window.sessionStorage.setItem("fname", fname)
                window.sessionStorage.setItem("lname", lname)
                window.sessionStorage.setItem("sex", sex)
                window.sessionStorage.setItem("status", status)
                window.sessionStorage.setItem("additional", additional)
                window.sessionStorage.setItem("childiin", childiin)
                window.sessionStorage.setItem("pic", pic)
                window.sessionStorage.setItem("darkTheme", darkTheme)

                if(signinRemember==true) {
                    window.localStorage.setItem("loggedin", "true")
                    window.localStorage.setItem("iin", signinIIN)
                    window.localStorage.setItem("fname", fname)
                    window.localStorage.setItem("lname", lname)
                    window.localStorage.setItem("sex", sex)
                    window.localStorage.setItem("status", status)
                    window.localStorage.setItem("additional", additional)
                    window.localStorage.setItem("childiin", childiin)
                    window.localStorage.setItem("pic", pic)
                    window.localStorage.setItem("darkTheme", darkTheme)
                }

                this.signinForm = false
                this.clearSignin()
                this.loginMessage = true
                setTimeout(() => { this.loginMessage = false; }, 3000);
                enableScroll()
            }
        },
        signup() {
            var signupIIN = (this.$el.querySelector(".form__iin").value).replace(/^\s+|\s+$/gm,'')
            var signupFname = (this.$el.querySelector(".form__fname").value).replace(/^\s+|\s+$/gm,'')
            var signupLname = (this.$el.querySelector(".form__lname").value).replace(/^\s+|\s+$/gm,'')
            var signupSex = this.$el.querySelector(".form__sex").value
            var signupStatus = this.$el.querySelector(".form__status").value
            if(signupStatus=="Student") {
                var signupAdditional = this.$el.querySelector(".form__class").value
            }
            else if(signupStatus=="Teacher") {
                var signupAdditional = this.$el.querySelector(".form__subject").value
            }
            else {
                var signupAdditional = (this.$el.querySelector(".form__childIIN").value).replace(/^\s+|\s+$/gm,'')
            }
            var signupPassword = this.$el.querySelector(".form__password").value
            var signupPassword2 = this.$el.querySelector(".form__password2").value
            var signupRemember = this.$el.querySelector(".form__remember").checked
            if(signupIIN==="" || signupFname==="" || signupLname==="" || signupAdditional==="" || signupPassword==="" || signupPassword2==="") {
                this.loginErrorMessage = true
                setTimeout(() => { this.loginErrorMessage = false; }, 3000);
            }
            /* else if(уже бундай ИИНмен акк ашылып койган) {
                this.registerErrorMessage = true
                setTimeout(() => { this.registerErrorMessage = false; }, 3000);
            } */
            /* else if(Parent болганда баласынын ИИНы датабейзда жок болса) {
                this.parentErrorMessage = true
                setTimeout(() => { this.parentErrorMessage = false; }, 3000);
            } */
            else if(signupPassword.length < 8) {
                this.passwordErrorMessage = true
                setTimeout(() => { this.passwordErrorMessage = false; }, 3000);
            }
            else if(signupPassword !== signupPassword2) {
                this.passwordsErrorMessage = true
                setTimeout(() => { this.passwordsErrorMessage = false; }, 3000);
            }
            else {
                var signupPic = "images/profilePics/" + (signupStatus.charAt(0) + signupSex.charAt(0)).toLowerCase() + ".png"
                window.localStorage.clear()
                window.sessionStorage.clear()

                this.loggedin = true
                this.user.iin = signupIIN
                this.user.fname = signupFname
                this.user.lname = signupLname
                this.user.sex = signupSex
                this.user.status = signupStatus
                if(signupStatus=="Parent") {
                    this.user.additional = "Parent"
                    this.user.childiin = signupAdditional
                }
                else {
                    this.user.additional = signupAdditional
                    this.user.childiin = null
                }
                this.user.pic = signupPic
                this.user.darkTheme = false

                window.sessionStorage.setItem("loggedin", "true")
                window.sessionStorage.setItem("iin", signupIIN)
                window.sessionStorage.setItem("fname", signupFname)
                window.sessionStorage.setItem("lname", signupLname)
                window.sessionStorage.setItem("sex", signupSex)
                window.sessionStorage.setItem("status", signupStatus)
                if(signupStatus=="Parent") {
                    window.sessionStorage.setItem("additional", "Parent")
                    window.sessionStorage.setItem("childiin", signupAdditional)
                }
                else {
                    window.sessionStorage.setItem("additional", signupAdditional)
                    window.sessionStorage.setItem("childiin", "null")
                }
                window.sessionStorage.setItem("pic", signupPic)
                window.sessionStorage.setItem("darkTheme", "false")

                if(signupRemember==true) {
                    window.localStorage.setItem("loggedin", "true")
                    window.localStorage.setItem("iin", signupIIN)
                    window.localStorage.setItem("fname", signupFname)
                    window.localStorage.setItem("lname", signupLname)
                    window.localStorage.setItem("sex", signupSex)
                    window.localStorage.setItem("status", signupStatus)
                    if(signupStatus=="Parent") {
                        window.localStorage.setItem("additional", "Parent")
                        window.localStorage.setItem("childiin", signupAdditional)
                    }
                    else {
                        window.localStorage.setItem("additional", signupAdditional)
                        window.localStorage.setItem("childiin", "null")
                    }
                    window.localStorage.setItem("pic", signupPic)
                    window.localStorage.setItem("darkTheme", "false")
                }

                this.signinForm = false
                this.signupForm = false
                this.clearSignup()
                this.loginMessage = true
                setTimeout(() => { this.loginMessage = false; }, 3000);
                enableScroll()
                /* датабейзга signupIIN, signupFname, signupLname, signupSex, signupStatus, signupAdditional, signupPic сактау, darkTheme = false деу */
            }
        },
        signout() {
            window.localStorage.clear();
            window.sessionStorage.clear();
            this.loggedin = false
            this.user.iin = null
            this.user.fname = null
            this.user.lname = null
            this.user.sex = null
            this.user.status = null
            this.user.additional = null
            this.user.childiin = null
            this.user.pic = null
            this.user.darktheme = null
        },
        openAddQna() {
            if (this.loggedin == true) {
                this.addQna=true; 
                this.closeSearch(); 
                this.closeFilter()
            }
            else {
                this.notLoggedInMessage = true
                setTimeout(() => { this.notLoggedInMessage = false; }, 3000);
            }
        },
        addQuestion() {
            var questionAuthor = this.user.fname + " " + this.user.lname
            var timeInLondon = String((new Date()).toLocaleString('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Europe/London' }));
            var questionDate = "" + timeInLondon.substr(6, 4) + timeInLondon.substr(3, 2) + timeInLondon.substr(0, 2) + timeInLondon.substr(12, 2) + timeInLondon.substr(15, 2) + timeInLondon.substr(18, 2)
            var questionTitle = (this.$el.querySelector(".form__title__qna").value).replace(/^\s+|\s+$/gm,'')
            var questionContent = (this.$el.querySelector(".form__content__qna").value).replace(/^\s+|\s+$/gm,'')
            var questionImages = this.$el.querySelector(".form__img__upload").files
            var questionTags1 = this.questionTags
            if(questionTitle === "" || questionTags1.length === 0) {
                this.questionErrorMessage = true
                setTimeout(() => { this.questionErrorMessage = false; }, 3000);
            }
            else {
                console.log(questionDate)
                this.addQna = false
                this.clearAddQna()
                this.questionMessage = true
                setTimeout(() => { this.questionMessage = false; }, 3000);
                enableScroll()
                /* датабейзга лактыру керек */
            }
        },
        openAddAnswer() {
            if (this.loggedin == true) {
                this.addAnswer=true; 
                this.closeFilterQ()
            }
            else {
                this.notLoggedInMessage = true
                setTimeout(() => { this.notLoggedInMessage = false; }, 3000);
            }
        },
        addAnAnswer() {
            var answerAuthor = this.user.fname + " " + this.user.lname
            var timeInLondon = String((new Date()).toLocaleString('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Europe/London' }));
            var answerDate = "" + timeInLondon.substr(6, 4) + timeInLondon.substr(3, 2) + timeInLondon.substr(0, 2) + timeInLondon.substr(12, 2) + timeInLondon.substr(15, 2) + timeInLondon.substr(18, 2)
            var answerContent = (this.$el.querySelector(".form__content__qna__answer").value).replace(/^\s+|\s+$/gm,'')
            var answerImage = this.$el.querySelector(".form__img__upload__answer").files
            if(answerContent === "") {
                this.answerErrorMessage = true
                setTimeout(() => { this.answerErrorMessage = false; }, 3000);
            }
            else {
                this.addAnswer = false
                this.clearAddAnswer()
                this.answerMessage = true
                setTimeout(() => { this.answerMessage = false; }, 3000);
                enableScroll()
                /* датабейзга лактыру керек */
            }
        },
        upvote(id) {
            if (this.loggedin == true) {
                /* if(датабейзда осындай айдиы бар суракты/ответты апвоут еткендердін арасында автордын иины бар) {
                    датабейздагы апвоут еткен адамдардын арасынан автордын иинын алып тастау
                }
                else {
                    if(датабейзда осындай айдиы бар суракты/ответты даунвоут еткендердін арасында автордын иины бар) {
                        датабейздагы даунвоут еткен адамдардын арасынан автордын иинын алып тастау
                    }
                    датабейздагы апвоут еткен адамдардын арасына автордын иинын косу
                } */
                if (id.substr(0,1)=='q') {
                    for (question of this.qna) {
                        if(question.questionid===id.substr(1,6)) {
                            if(question.upvote==="upvoted") {
                                question.upvote = "null"
                                question.upvotes = (Number(question.upvotes) - 1).toString()
                            }
                            else if(question.upvote==="downvoted") {
                                question.upvote = "upvoted"
                                question.upvotes = (Number(question.upvotes) + 2).toString()
                            }
                            else {
                                question.upvote = "upvoted"
                                question.upvotes = (Number(question.upvotes) + 1).toString()
                            }
                        }
                    }
                }
                else if (id.substr(0,1)=='p') {
                    if(this.question[0].questionid===id.substr(1,6)) {
                        if(this.question[0].upvote==="upvoted") {
                            this.question[0].upvote = "null"
                            this.question[0].upvotes = (Number(this.question[0].upvotes) - 1).toString()
                        }
                        else if(this.question[0].upvote==="downvoted") {
                            this.question[0].upvote = "upvoted"
                            this.question[0].upvotes = (Number(this.question[0].upvotes) + 2).toString()
                        }
                        else {
                            this.question[0].upvote = "upvoted"
                            this.question[0].upvotes = (Number(this.question[0].upvotes) + 1).toString()
                        }
                    }
                }
                else {
                    for (answer of this.question[1]) {
                        if(answer.answerid===id.substr(1,6)) {
                            if(answer.upvote==="upvoted") {
                                answer.upvote = "null"
                                answer.upvotes = (Number(answer.upvotes) - 1).toString()
                            }
                            else if(answer.upvote==="downvoted") {
                                answer.upvote = "upvoted"
                                answer.upvotes = (Number(answer.upvotes) + 2).toString()
                            }
                            else {
                                answer.upvote = "upvoted"
                                answer.upvotes = (Number(answer.upvotes) + 1).toString()
                            }
                        }
                    }
                }
                this.updateQna()
                this.updateAnswers()
            }
            else {
                this.notLoggedInMessage = true
                setTimeout(() => { this.notLoggedInMessage = false; }, 3000);
            }
        },
        downvote(id) {
            if (this.loggedin == true) {
                /* if(датабейзда осындай айдиы бар суракты/ответты даунвоут еткендердін арасында автордын иины бар) {
                    датабейздагы даунвоут еткен адамдардын арасынан автордын иинын алып тастау
                }
                else {
                    if(датабейзда осындай айдиы бар суракты/ответты апвоут еткендердін арасында автордын иины бар) {
                        датабейздагы апвоут еткен адамдардын арасынан автордын иинын алып тастау
                    }
                    датабейздагы даунвоут еткен адамдардын арасына автордын иинын косу
                } */
                if (id.substr(0,1)=='q') {
                    for (question of this.qna) {
                        if(question.questionid===id.substr(1,6)) {
                            if(question.upvote==="downvoted") {
                                question.upvote = "null"
                                question.upvotes = (Number(question.upvotes) + 1).toString()
                            }
                            else if(question.upvote==="upvoted") {
                                question.upvote = "downvoted"
                                question.upvotes = (Number(question.upvotes) - 2).toString()
                            }
                            else {
                                question.upvote = "downvoted"
                                question.upvotes = (Number(question.upvotes) - 1).toString()
                            }
                        }
                    }
                }
                else if (id.substr(0,1)=='p') {
                    if(this.question[0].questionid===id.substr(1,6)) {
                        if(this.question[0].upvote==="downvoted") {
                            this.question[0].upvote = "null"
                            this.question[0].upvotes = (Number(this.question[0].upvotes) + 1).toString()
                        }
                        else if(this.question[0].upvote==="upvoted") {
                            this.question[0].upvote = "downvoted"
                            this.question[0].upvotes = (Number(this.question[0].upvotes) - 2).toString()
                        }
                        else {
                            this.question[0].upvote = "downvoted"
                            this.question[0].upvotes = (Number(this.question[0].upvotes) - 1).toString()
                        }
                    }
                }
                else {
                    for (answer of this.question[1]) {
                        if(answer.answerid===id.substr(1,6)) {
                            if(answer.upvote==="downvoted") {
                                answer.upvote = "null"
                                answer.upvotes = (Number(answer.upvotes) + 1).toString()
                            }
                            else if(answer.upvote==="upvoted") {
                                answer.upvote = "downvoted"
                                answer.upvotes = (Number(answer.upvotes) - 2).toString()
                            }
                            else {
                                answer.upvote = "downvoted"
                                answer.upvotes = (Number(answer.upvotes) - 1).toString()
                            }
                        }
                    }
                }
                this.updateQna()
                this.updateAnswers()
            }
            else {
                this.notLoggedInMessage = true
                setTimeout(() => { this.notLoggedInMessage = false; }, 3000);
            }
        },
        updateQna() {
            this.sortedQna = this.qna
            if(this.qnaSolved!="All") {
                this.sortedQna = this.sortedQna.filter(question => question.solved==this.qnaSolved)
            }
            switch (this.qnaSorting) {
                case "New":
                    this.sortedQna.sort((a,b) => (Number(b.date) - Number(a.date)));
                    break;
                case "Top":
                    this.sortedQna.sort((a,b) => (Number(b.upvotes) - Number(a.upvotes)));
                    break;
                case "Controversial":
                    this.sortedQna.sort((a,b) => (Number(b.comments) - Number(a.comments)));
                    break;
                default:
                    this.sortedQna.sort((a,b) => (Number(b.hotUpvotes) - Number(a.hotUpvotes)));
            }
            this.sortedQna = this.sortedQna.filter(question => this.qnaTags.every(tag => question.tags.includes(tag)))
            if (this.qnaSearch != "") {
                this.sortedQna = this.sortedQna.filter(question => (question.title.toLowerCase()).includes(this.qnaSearch.toLowerCase()))
            }
        },
        getAnswers(questionid) {
            /* questionid бойынша ответтерді датабейздан алу
            this.question[1] = */
            for (answer of this.question[1]) {
                if (answer.answer == "True") {
                    this.answer = answer;
                    break;
                }
            }
        },
        updateAnswers() {
            this.sortedAnswers = this.question[1]
            switch (this.answersSorting) {
                case "New":
                    this.sortedAnswers.sort((a,b) => (Number(b.date) - Number(a.date)));
                    break;
                default:
                    this.sortedAnswers.sort((a,b) => (Number(b.upvotes) - Number(a.upvotes)));
            }
        },
    }
}).mount('#app');
