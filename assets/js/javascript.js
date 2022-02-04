const theme = document.querySelectorAll('.theme')


theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darktheme" , "lighttheme");
        switch (e.target.id){
            case"dark":
            document.body.classList.add("darktheme");
            break;
            case"light":
            document.body.classList.add("lighttheme")
            default:
                null;
        }
    })
})