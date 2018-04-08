window.onload = function() {

  //The Model object will contain all the data and structures of the app
  var Model = {

    colors: {
      background: "#FFFFFF",
      primary: "#FFA726",
      secundary: "#2366A6",
      primaryCardBackground: "#FFD79E",
      secundaryCardBackground: "#C9DEF4"
    },

    form: function(icon, labelName) {
      var formData = {
        icon: icon,
        labelName: labelName
      };
      return formData;
    },

    addForm: function(form) {
      var formHTML = '<div class="input-field col s12">' +
        '<i class="material-icons prefix">' + form.icon + '</i>' +
        '<input id="icon_prefix" type="text">' +
        '<label for="icon_prefix">' + form.labelName + '</label>' +
        '</div>';
      return formHTML;
    },

    validateLogin: function(name, password) {
      //// TODO: Check login in database !!!
    },

    validateSignUp: function(name, email, password) {
      // TODO: Register user in the database !!!
    }
  };

  //The Controller object comunicates the View to the Model and vice versa
  var Controller = {
    getColors: function() {
      return Model.colors;
    },

    addNewForm: function(form) {
      return Model.addForm(form);
    },

    NewForm: function(icon, labelName) {
      return Model.form(icon, labelName);
    }

  };


  //The View object is in charge of redering and initializing the app
  var View = {

    //Forms (you can create more forms or add more fields)
    loginForm: {
      firstname: Controller.NewForm("account_circle", "First Name"),
      password: Controller.NewForm("fingerprint", "Password")
    },

    SignInForm: {
      firstname: Controller.NewForm("account_circle", "First Name"),
      lastname: Controller.NewForm("account_circle", "Last Name"),
      email: Controller.NewForm("email", "Email"),
      password: Controller.NewForm("fingerprint", "Password")
    },

    DOMelements: {
      card: document.getElementById("card"),
      title: document.getElementById("title"),
      actionButton: document.getElementById("actionButton"),
      actionButtonIcon: document.getElementById("icon"),
      formArea: document.getElementById("form"),
      submitButton: document.getElementById("submit")

    },

    init: function() {
      this.render();
      this.LoginModel();
    },

    render: function() {
      isLogin = false;
      this.DOMelements.backgroundColor = "#FFFFFF";
      this.DOMelements.actionButton.addEventListener("click", function() {
        if (isLogin) {
          View.LoginModel();
          isLogin = false;
        } else {
          View.SignUpModel();
          isLogin = true;
        }

      }, false);
    },

    //Here we can customize the view of a particular form
    LoginModel: function() {
      let colors = Controller.getColors();

      this.DOMelements.formArea.innerHTML = "";
      this.DOMelements.title.textContent = "Login";
      this.DOMelements.title.style.color = colors.secundary;
      this.DOMelements.actionButton.style.backgroundColor = colors.secundary;
      this.DOMelements.actionButtonIcon.textContent = "person_add";
      for (let form in this.loginForm) {
        this.DOMelements.formArea.insertAdjacentHTML('beforeend', Controller.addNewForm(this.loginForm[form]));
      }
      this.DOMelements.submitButton.textContent = "Sign in";
      this.DOMelements.submitButton.style.color = colors.background;
      this.DOMelements.submitButton.style.backgroundColor = colors.secundary;
      this.DOMelements.card.style.backgroundColor = colors.primaryCardBackground;
    },

    SignUpModel: function() {
      let colors = Controller.getColors();

      this.DOMelements.formArea.innerHTML = "";
      this.DOMelements.title.textContent = "Sign up";
      this.DOMelements.title.style.color = colors.primary;
      this.DOMelements.actionButton.style.backgroundColor = colors.primary;
      this.DOMelements.actionButtonIcon.textContent = "account_circle";
      for (let form in this.SignInForm) {
        this.DOMelements.formArea.insertAdjacentHTML('beforeend', Controller.addNewForm(this.SignInForm[form]));
      }

      this.DOMelements.submitButton.textContent = "Sign up";
      this.DOMelements.submitButton.style.color = colors.background;
      this.DOMelements.submitButton.style.backgroundColor = colors.primary;
      this.DOMelements.card.style.backgroundColor = colors.secundaryCardBackground;
    }

  };

  //This will start the program
  View.init();



}
