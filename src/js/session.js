var session = {
        name:"url",
        save: function (data) {
            sessionStorage.setItem(session.name, data);
        },
        getLastIndex: function () {

            return sessionStorage.length;
        }
        , getAll: function () {

            return sessionStorage;
        }
        , get: function () {

            return sessionStorage.getItem(session.name);
        }
    };
