const email = "test!@naver.com"

if (email.includes("@")){
    document.write("올바른 이메일 형식입니다.")
}

if (email.indexOf("@")){
    document.write(email.indexOf("@"))
}

document.write(`<br>${email.slice(0,-1)}<br>`)
document.write(`${email.substring(0,3)}<br>`)
document.write(email.split("!"))
