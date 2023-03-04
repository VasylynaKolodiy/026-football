const answerArr = []
function getAnswers (answer) {
    answerArr.push(answer)
}


function addNewComment () {

    let newComment = document.querySelector('.new-comment-input').value
    const bodyComment = `
        <div class='comments' style='display:block'>
        <div class='profile'>
            <img src='./assets/images/profile.jpg' alt=''/>
        </div>

        <div class='comment-content'>
            <p class='name'>
                <span style='vertical-align: inherit;'>
                    <span style='vertical-align: inherit;'>Anônimo</span>
                </span>
            </p>

            <p>
                <span style='vertical-align: inherit;'>
                   <span style='vertical-align: inherit;'>` + newComment + ` </span>
                </span>
            </p>
        </div>
        <div class='clr'></div>
        <div class='comment-status'>
                  <span>
                    <span style='vertical-align: inherit;'>
                      <span style='vertical-align: inherit;'>Curte·comente</span>
                    </span>
                    <img alt='' src='./assets/images/like.png' />
                    <span style='vertical-align: inherit;'>
                      <span style='vertical-align: inherit;'> 0 </span>
                    </span>
                  </span>
            <span style='vertical-align: inherit;'>
                  <small>
                    <span style='vertical-align: inherit;'>·</span>
                  </small>

                  <small>
                    <u>
                      <span style='vertical-align: inherit;'>agora</span>
                    </u>
                  </small>
                </span>
            <small>
                <span style='vertical-align: inherit;'/>
                <u>
                    <span style='vertical-align: inherit;'/>
                </u>
            </small>
        </div>
    </div>`

    newComment.length && document.querySelector(".new-comment").insertAdjacentHTML("afterend", bodyComment);
    document.querySelector('.new-comment-input').value = ""
}