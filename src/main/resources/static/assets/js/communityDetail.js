
const createBtns = async () => {
    let data = await distinguishMembers(localStorage.getItem('communityIdForDetailPage'))
    let mainDiv = document.getElementById('createBtns')
    let postCreateBtn = document.createElement('button')
    let eventCreateBtn = document.createElement('button')
    let pollCreateBtn = document.createElement('button')
    let optionForPost = document.createElement('option')
    let postGroupSelect = document.getElementById('groupSelect1')
    let optionForEvent = document.createElement('option')
    let eventGroupSelect = document.getElementById('groupSelect2')
    let optionForPoll = document.createElement('option')
    let pollGroupSelect = document.getElementById('groupSelect3')
    let rawCreateionBtn = document.createElement('button')
    let rawGroupSelect = document.getElementById('groupSelect4')
    let optionForRaw = document.createElement('option')

    let firstSpanForPost = document.createElement('span')
    let secondSpanForPost = document.createElement('span')
    let thirdSpanForPost = document.createElement('span')

    let firstSpanForFile = document.createElement('span')
    let secondSpanForFile = document.createElement('span')
    let thirdSpanForFile = document.createElement('span')

    let firstSpanForEvent = document.createElement('span')
    let secondSpanForEvent = document.createElement('span')
    let thirdSpanForEvent = document.createElement('span')

    let firstSpanForPoll = document.createElement('span')
    let secondSpanForPoll = document.createElement('span')
    let thirdSpanForPoll = document.createElement('span')

    let controller1 = document.createElement('div')
    let controller2 = document.createElement('div')

    let paperPlane = document.createElement('i')
    paperPlane.classList.add('fa-solid','fa-paper-plane','text-info') 
    let fileBox = document.createElement('i')
    fileBox.classList.add('fa-solid','fa-box-open','text-danger')
    let calendarIcon = document.createElement('i')
    calendarIcon.classList.add('fa-solid','fa-calendar','text-warning')
    let graph = document.createElement('i')
    graph.classList.add('fa-solid','fa-chart-simple','text-success')

    console.log(optionForRaw)
    console.log(rawGroupSelect)



    optionForPost.value = localStorage.getItem('communityIdForDetailPage')
    optionForPost.textContent = 'groupId'
    optionForPost.selected = true
    postGroupSelect.appendChild(optionForPost)
    postCreateBtn.setAttribute('data-bs-toggle','offcanvas')
    postCreateBtn.setAttribute('data-bs-target','#postMaker')
    postCreateBtn.setAttribute('aria-controls','postMaker') 
    postCreateBtn.classList.add('group-pushable')
    firstSpanForPost.classList.add('group-shadow')
    secondSpanForPost.classList.add('group-edge')
    thirdSpanForPost.classList.add('group-front','text')
    thirdSpanForPost.appendChild(paperPlane) 
    postCreateBtn.appendChild(firstSpanForPost)
    postCreateBtn.appendChild(secondSpanForPost)
    postCreateBtn.appendChild(thirdSpanForPost)

    optionForRaw.value = localStorage.getItem('communityIdForDetailPage')
    optionForRaw.textContent = 'groupId'
    optionForRaw.selected = true
    rawGroupSelect.appendChild(optionForRaw)
    rawCreateionBtn.setAttribute('data-bs-toggle','offcanvas')
    rawCreateionBtn.setAttribute('data-bs-target','#rawMaker')
    rawCreateionBtn.setAttribute('aria-controls','rawMaker') 
    rawCreateionBtn.classList.add('group-pushable')
    firstSpanForFile.classList.add('group-shadow')
    secondSpanForFile.classList.add('group-edge')
    thirdSpanForFile.classList.add('group-front','text')
    thirdSpanForFile.appendChild(fileBox)
    rawCreateionBtn.appendChild(firstSpanForFile)
    rawCreateionBtn.appendChild(secondSpanForFile)
    rawCreateionBtn.appendChild(thirdSpanForFile) 

    

    optionForEvent.value = localStorage.getItem('communityIdForDetailPage')
    optionForEvent.textContent = 'groupId'
    optionForEvent.selected = true
    eventGroupSelect.appendChild(optionForEvent)
    eventCreateBtn.setAttribute('data-bs-toggle','offcanvas')
    eventCreateBtn.setAttribute('data-bs-target','#eventMaker')
    eventCreateBtn.setAttribute('aria-controls','eventMaker') 
    eventCreateBtn.classList.add('group-pushable')
    firstSpanForEvent.classList.add('group-shadow')
    secondSpanForEvent.classList.add('group-edge')
    thirdSpanForEvent.classList.add('group-front','text')
    thirdSpanForEvent.appendChild(calendarIcon)
    eventCreateBtn.appendChild(firstSpanForEvent)
    eventCreateBtn.appendChild(secondSpanForEvent)
    eventCreateBtn.appendChild(thirdSpanForEvent)

    optionForPoll.value = localStorage.getItem('communityIdForDetailPage')
    optionForPoll.textContent = 'groupId'
    optionForPoll.selected = true
    pollGroupSelect.appendChild(optionForPoll)
    pollCreateBtn.setAttribute('data-bs-toggle','offcanvas')
    pollCreateBtn.setAttribute('data-bs-target','#pollMaker')
    pollCreateBtn.setAttribute('aria-controls','pollMaker') 
    pollCreateBtn.classList.add('group-pushable')
    firstSpanForPoll.classList.add('group-shadow')
    secondSpanForPoll.classList.add('group-edge')
    thirdSpanForPoll.classList.add('group-front','text')
    thirdSpanForPoll.appendChild(graph)
    pollCreateBtn.appendChild(firstSpanForPoll)
    pollCreateBtn.appendChild(secondSpanForPoll)
    pollCreateBtn.appendChild(thirdSpanForPoll)
    
    if(data === 'ADMIN' || data === 'OWNER'){ 
        controller1.appendChild(postCreateBtn)
        controller1.appendChild(rawCreateionBtn)
        controller2.appendChild(eventCreateBtn)
        controller2.appendChild(pollCreateBtn)
        mainDiv.classList.add('d-flex')
        mainDiv.style.marginTop = '30px'
        mainDiv.style.marginLeft = '430px'
        mainDiv.appendChild(controller1)
        mainDiv.append(controller2)
    }else{
        controller1.appendChild(postCreateBtn)
        controller1.appendChild(rawCreateionBtn)
        mainDiv.classList.add('d-flex')
        mainDiv.style.marginTop = '30px'
        mainDiv.style.marginLeft= '650px'
        mainDiv.appendChild(controller1)
    }
}


document.getElementById('labelForPollPhoto').addEventListener('click',()=>{
    document.getElementById('pollMultipartFile').click()
})


document.getElementById('pollMultipartFile').addEventListener('change', function(event) {
    console.log('wow this is changing')
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewContainer = document.getElementById('previewContainerForPollPhoto');
            while(previewContainer.firstChild){
                previewContainer.removeChild(previewContainer.firstChild)
            }
            const div = document.createElement('div')
            div.classList.add('super-container')

            const image = document.createElement('img')
            image.classList.add('super-image-video')

            div.appendChild(image)
            
            image.src = e.target.result

            previewContainer.appendChild(div)
            // previewContainer.innerHTML = `<img src="${e.target.result}" alt="Image Preview" class="super-image-video">`;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('eventPhotoFile').addEventListener('change', function(event) {
    console.log('wow this is changing')
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewContainer = document.getElementById('previewContainerForEventPhoto');
            while(previewContainer.firstChild){
                previewContainer.removeChild(previewContainer.firstChild)
            }
            const div = document.createElement('div')
            div.classList.add('super-container')

            const image = document.createElement('img')
            image.classList.add('super-image-video')

            div.appendChild(image)
            
            image.src = e.target.result

            previewContainer.appendChild(div)
            // previewContainer.innerHTML = `<img src="${e.target.result}" alt="Image Preview" class="super-image-video">`;
        };
        reader.readAsDataURL(file);
    }
});


const deleteRawFileResource = (id) => {
    let element = document.getElementById('old-raw-file-'+id)
    element.classList.add('deleted-raw-file')
    console.log(element)
}

const removePreviewForRawFile = () => {
    let parent = document.getElementById('editModal') 
    parent.innerHTML = '' 
 
}

const removePreviewForPostUpdate = () => {
    let parent = document.getElementById('editModal') 
    parent.innerHTML = '' 
}

const getUpdateDataForRaw = async () => { 
    let updateResourcesDtos = []
    const value = document.querySelectorAll('#oldRawFileId')
    console.log(value)
    value.forEach(v => console.log(v.value))
    value.forEach(v => {
        const cap = document.getElementById(`old-raw-file-caption-${v.value}`)
        let caption = cap.value
        console.log(caption)
        const url = document.getElementById(`old-raw-file-url-${v.value}`)
        let resourceUrl = document.getElementById(`old-raw-file-${v.value}`)
        console.log(resourceUrl )
        if (resourceUrl.classList.contains('deleted-raw-file')) {
            let dto = {
                resourceId: v.value,
                postCaption: 'deleted',
                postUrl: 'deleted'
            }
            console.log(dto)
            updateResourcesDtos.push(dto)
        } else {
            let dto = {
                resourceId: v.value,
                postCaption: caption,
                postUrl: url
            }
            updateResourcesDtos.push(dto)

        }
        console.log(updateResourcesDtos)
    })
    console.log(updateResourcesDtos)
    let data = new FormData(document.getElementById('updateRawForm'))
    let newFiles = document.getElementById('updateRawAddedFiles').files 
    for (let i = 0; i < newFiles.length; i++) {
        data.append('files', newFiles[i])  
    }
    console.log(Object.fromEntries(data.entries()).postId+'---------------------')
    let firstResponse = await fetch('/post/firstUpdateRaw', {
        method: 'POST',
        body: data
    })
    let firstResult = await firstResponse.json()
    console.log("Kyi Kya mal", firstResult.postId)
    console.log(firstResult)
    let secondResponse = await fetch('/post/secondUpdateRaw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateResourcesDtos)
    })
    let secondResult = await secondResponse.json()
    console.log(secondResult)
    if(secondResult){
        await removeCat()
    }
    if (secondResult) {
        await removeCat()
        // while (newsfeed.firstChild) {
        //     newsfeed.removeChild(newsfeed.firstChild)
        // }
        const p = await fetchPostById(Object.fromEntries(data.entries()).postId);
        const ParentDetailModal = document.getElementById('detail-modal-'+p.id)
        const childModalBox  = document.getElementById('newsfeedPost'+p.id)
        console.log('8888888888888888888888888888888888888'+p)
            const contentSection = document.getElementById(`post-update-section-${p.id}`);
                const postId = p.id;
                console.log("Want to know",postId);
                const postContent = document.querySelector(`.post-content-${postId}`);
                if (postContent && childModalBox) {
                    console.log('Remove Successfully')
                    postContent.remove();
                    childModalBox.remove()
                }
                let updatedPost = await fetch('/post/getPost/'+postId)
                let r = await updatedPost.json()
                let post = ''
                post += `<p>${r.description}</p>`
                post += await makeFileDownloadPost(r.resources)
 
       

       
        contentSection.innerHTML = post
         removePreviewForRawFile()

    }
}


document.getElementById('labelForRawFile').addEventListener('click',()=>{
    console.log('here')
    document.getElementById('raw').click()
})

const checkEventOwnerOrAdmin = async (id) => {
    let data = await fetch(`/event/checkEventOwnerOrAdmin/${id}`)
    let response = await data.json()
    console.log(response[0])
    return response[0]
}



document.getElementById('raw').addEventListener('change', function () {
    const preview = document.getElementById('raw-preview');
    preview.innerHTML = '';

    const files = this.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name.toLowerCase();

        const previewItem = document.createElement('div');
        previewItem.className = 'preview-item';
        previewItem.classList.add('card')
        previewItem.classList.add('shadow') 
        previewItem.classList.add('d-flex')
        previewItem.style.width = '300px'

        const icon = document.createElement('i')
        icon.classList.add('fa-solid')
        icon.classList.add('fa-box-archive')
        icon.classList.add('text-success')
        icon.classList.add('mx-2')

        // Display file name
        const fileNamePara = document.createElement('p');
        fileNamePara.textContent = fileName;
        fileNamePara.classList.add('font-monospace')

        const mDiv = document.createElement('div')
        mDiv.classList.add('d-flex')
        mDiv.style.alignContent = 'center'
        mDiv.style.alignItems = 'center'

        mDiv.appendChild(icon)
        mDiv.appendChild(fileNamePara)

        previewItem.appendChild(mDiv) 



        preview.appendChild(previewItem);
    }
});



const downloadFile = async (event, url, fileName) => {
    event.preventDefault();
    try {
        const response = await fetch(url, {
            redirect: 'follow' // Follow redirects
        });
        if (!response.ok) {
            throw new Error('Network response was not ok in fetching download file');
        }
        const blob = await response.blob();
        console.log(fileName+' ------> this is filename')
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = fileName; // Ensure the file name is set correctly
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
    } catch (error) {
        alert('Failed to download the file');
        console.error('There is a problem downloading the file:', error);
    }
};


const createARawFilePost = async () => {
    let file = document.getElementById('raw').files
    let form = new FormData(document.getElementById('rawForm')) 

    for(let i = 0 ; i <file.length ; i++){
        form.append('rawFiles',file[i]) 
    } 
    console.log('wowowoow')

    let data = await fetch('/post/createARawFilePost',{
        body:form,
        method: 'POST' 
    })

    let response = await data.json()
    console.log(response)
    document.getElementById('rawForm').reset()
    document.getElementById('raw-preview').innerHTML = ''
    while (newsfeed.firstChild) {
        newsfeed.removeChild(newsfeed.firstChild)
    }
    await getPosts()
}




const checkGroupForMessagingSystem = async (id) => {
    const user = await getCheckUserForGroup();
    const memberList = await getAllMembersForMessagingSystem(id);
    const staffIdList = memberList.map(user => user.staffId);
    const msgBtn = document.getElementById('chatMessageIconForGroup');
    if(user.role === 'ADMIN' || staffIdList.includes(loginUser)){
        msgBtn.style.display = 'block';
    msgBtn.addEventListener('click',() => {
        localStorage.setItem('chatRoomIdForGroup', id);
        window.location.href = `/api/community/goMal-chatRoom`;
    });
    }
}

const getAllMembersForMessagingSystem = async (id) => {
    const memberData = await fetch(`/api/community/get-groupMembers-check/${id}`)
    const resData = await memberData.json();
    return resData;
}


const checkGroupForLoginUser =async (id) => {
    const invBtn = document.getElementById('inviteBtn');
    const user = await getCheckUserForGroup();
    const groupOwner = await getCommunityOwner(id);
    console.log("DCHeck",user.role)
    console.log("DCHeck",groupOwner)
    if(user.role === 'ADMIN' || groupOwner !== null){
        invBtn.style.display = 'block';
        invBtn.style.marginLeft = '160px';
        invBtn.style.marginTop = '-47px';
    }
}

const getCommunityOwner = async (id) => {
    try {
        const response =  await fetch(`/api/community/get-groupOwner-check/${loginUser}/${id}`);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const resOwner = await response.json();
        console.log('Fetched Owner Data:', resOwner);
        return resOwner;
    } catch (error) {
        console.error('Failed to fetch Owner :', error);
        return null;
    }

}

const getCheckUserForGroup = async () => {
    const data = await fetch(`/api/community/get-user-checkGroup/${loginUser}`)
    const res = await data.json();
    return res;
}

window.onload = async function(){
    console.log('wow wow here')

    await startUp()
    await createBtns()
    await getPosts()
}


const fetchSizes = async (id) => {
    const reactSize = await fetch(`/like-size/${id}`);
    const reactCount = await reactSize.json();
    return reactCount;
};



const fetchPostById = async (id) => {
    const postData = await fetch(`/post/fetch-post/${id}`);
    const postRes = await postData.json();
    return postRes;
}



document.addEventListener('DOMContentLoaded', function() {
    localStorage.removeItem('searchInput');
})
function goToCreatePost() {
    window.location.href = '/user/goToCreatePost'
}

const fetchCommentSizes = async (id) => {
    const commentSize = await fetch(`/comment-size/${id}`);
    const commentCount = await commentSize.json();
    return commentCount;
};

const fetchCommetedUser = async (id) => {
    const commentUser = await fetch(`/user/comment-user-data/${id}`);
    if (!commentUser.ok) {
        alert('something wrong');
    }
    const commentUserData = await commentUser.json();
    return commentUserData;
}



const fetchReactType = async (id) => {
    try {
        const response = await fetch(`/like-type/${id}`);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const reactTypeData = await response.json();
        console.log('Fetched reactTypeData:', reactTypeData);
        return reactTypeData;
    } catch (error) {
        console.error('Failed to fetch react type:', error);
        return null;
    }
};


const fetchReactTypeForNotification = async (id) => {
    const reactType = await fetch(`/user/like-noti-type/${id}`);
    const reactDataType = await reactType.json();
    return reactDataType;
}

const removeReaction = async (id) => {
    const cancelType = await fetch(`/remove-like-type/${id}`);
    if (!cancelType.ok) {
        alert('something wrong');
    }
    console.log('hehhe')
};

const fileInput = document.getElementById('file');
const type = document.getElementById('')
let newsfeed = document.getElementById('newsfeedTab')
let cal = document.getElementById('cal')
let pol = document.getElementById('pol')
let cat = document.getElementById('catBox')
let mark = document.getElementById('markBox')
let eventDiv = document.getElementById('events')
const mentionSuggestions = document.getElementById('mentionSuggestions');

const getGroupOrPublicMentionUsers =async (id) => {
    const getUsers = await fetch(`/get-mentionUsers-group/${id}`);
    const data = await getUsers.json();
    return data;
}

const mentionPostForComment = (id) => {
    const messageInput = document.getElementById('commentText');
    const mentionSuggestions = document.getElementById('mentionSuggestionsForComment');
    mentionSuggestions.classList.add('mentionSuggestionsContainer'); // Add CSS class for styling

    messageInput.addEventListener('input', async (event) => {
        const inputValue = event.target.value;
        const mentionIndex = inputValue.lastIndexOf('@');
        const users = (await getGroupOrPublicMentionUsers(id)).map(user => ({
            ...user,
            name: user.name.replace(/\s+/g, '')
        }));

        if (mentionIndex !== -1) {
            const mentionQuery = inputValue.substring(mentionIndex + 1).toLowerCase();
            const matchedUsers = users.filter(user => user.name.toLowerCase().includes(mentionQuery));

            mentionSuggestions.innerHTML = '';

            if (matchedUsers.length > 0) {
                matchedUsers.forEach(user => {
                    const suggestionElement = document.createElement('div');
                    suggestionElement.textContent = user.name;
                    suggestionElement.classList.add('mentionSuggestion');
                    suggestionElement.addEventListener('click', function() {
                        const mentionStart = mentionIndex;
                        const mentionEnd = mentionIndex + mentionQuery.length + 1;
                        const mentionText = `@${user.name} `;
                        const mentionData = {
                            text: mentionText,
                            id: user.staffId
                        };
                        messageInput.value = inputValue.substring(0, mentionStart) + mentionText + inputValue.substring(mentionEnd);
                        messageInput.dataset.mentions = JSON.stringify([...JSON.parse(messageInput.dataset.mentions || '[]'), mentionData]);
                        mentionSuggestions.innerHTML = '';
                    });
                    mentionSuggestions.appendChild(suggestionElement);
                });
            }
        } else {
            mentionSuggestions.innerHTML = '';
        }
    });
};

const extractMentionedUsersForComment = (postText) => {
    const mentions = JSON.parse(document.getElementById('commentText').dataset.mentions || '[]');
    return mentions.map(mention => mention.id);
}

const mentionCommunityMember= () => {
     const messageInput = document.getElementById('post-content');
    messageInput.addEventListener('input',  async (event) => {
        const inputValue = event.target.value;
        const mentionIndex = inputValue.lastIndexOf('@');
        const users = (await getAllMembersWithoutLoginUser()).map(user => ({
            ...user,
            name: user.name.replace(/\s+/g, '')
        }));
        if (mentionIndex !== -1) {
            const mentionQuery = inputValue.substring(mentionIndex + 1);
            const matchedUsers = users.filter(user => user.name.toLowerCase().includes(mentionQuery.toLowerCase()));

            if (matchedUsers.length > 0) {
                mentionSuggestions.innerHTML = '';

                matchedUsers.forEach(user => {
                    const suggestionElement = document.createElement('div');
                    suggestionElement.textContent = user.name;
                    suggestionElement.classList.add('mentionSuggestion');
                    suggestionElement.addEventListener('click', function() {
                        const mentionStart = mentionIndex;
                        const mentionEnd = mentionIndex + mentionQuery.length;
                        const mentionText = `@${user.name} `;
                        let newText = inputValue.substring(0, mentionStart) + mentionText + inputValue.substring(mentionEnd);
                        if (mentionEnd === inputValue.length - 1) {
                            newText = inputValue.substring(0, inputValue.length - 1) + mentionText;
                        }
                        messageInput.value = newText;
                        mentionSuggestions.innerHTML = '';
                    });
                    mentionSuggestions.appendChild(suggestionElement);
                });
            } else {
                mentionSuggestions.innerHTML = '';
            }
        } else {
            mentionSuggestions.innerHTML = '';
        }
    });
};

const getAllMembersWithoutLoginUser = async () => {
    const getAllData = await fetch('/get-activeUser-forMention');
    const response = await getAllData.json();
    return response;
};


const getAllMember = async () => {
    const getAllData = await fetch('/get-all-active-user');
    const response = await getAllData.json();
    return response;
};

const highlightMentions = async (description) => {

    const allMembers = await getAllMember();
    const sanitizedMemberNames = allMembers.map(member => member.name.replace(/\s+/g, ''));

    const mentionRegex = /@([a-zA-Z0-9_]+)/g;

    return description.replace(mentionRegex, (match, username) => {
        if (sanitizedMemberNames.includes(username)) {
            return `<span class="mention">${match}</span>`;
        } else {
            return match;
        }
    });
};

async function createPost() {
    loadingModalBox.show()
    let postText = document.getElementById('content').value
    let postFile = document.getElementById('file').files[0]


    if (!postFile && postText.trim() === '') {
        alert("Please enter some text or upload a media file.");
        return;
    } else {
        let data = new FormData(document.getElementById('postForm'))
        let file = document.getElementById('file').files
        let captions = [];

        for (let i = 0; i < file.length; i++) {
            data.append('files', file[i])
            const captionInput = document.querySelector(`input[name="caption-${i}"]`);
            if (captionInput) {
                captions.push(captionInput.value + '');
            } else {
                captions.push('')
            }
        }
        data.append('captions', captions);
        console.log(data)
        console.log(Object.fromEntries(data.entries()))
        let response = await fetch('/post/createPublicPost', {
            method: 'POST',
            body: data
        })
        document.getElementById('postForm').reset()
        console.log(response)
        if (response) {
            removeCat()
            removePreview()
        }
     console.log("Post text", postText)
        const res = await response.json();
        if(res) {
            console.log("ID",res.id)
            let mentionedUsers = extractMentionedUsers(postText);

            await sendMentionNotification(mentionedUsers,res.id);
        }
        newsfeed.innerHTML = ''
        await getPosts()
        // postCount = 0
    }

    
}

// const extractMentionedUsers = (postText) => {
//     const mentionRegex = /\[\[([^\]]+)\]\]/g;
//     let mentionedUsers = [];
//     let match;
//
//     while ((match = mentionRegex.exec(postText)) !== null) {
//         mentionedUsers.push(match[1].trim());
//     }
//
//     console.log("Mentioned Users: ", mentionedUsers);
//
//     return mentionedUsers;
// };


 
 

 

 
 

 
async function getPostDetail(id) {
    let rawButton = document.getElementById('rawUpdateButton')
    let resourceButton = document.getElementById('resourceUpdateButton')
    let data = await fetch('/post/getPost/' + id, {
        method: 'GET'
    })
    let response = await data.json()
    console.log(response)
    let div = document.getElementById('editModal')
    console.log(div)
    if(response.postType === 'RAW'){

        let preview = document.createElement('div');
        preview.setAttribute('id','update-raw-preview')
        div.appendChild(preview)


        resourceButton.style.display = 'none'
        rawButton.style.display = 'block'

          let form = document.createElement('form')
          form.setAttribute('id','updateRawForm')

          const oldRawFile = document.createElement('div')
          oldRawFile.setAttribute('id','update-raw-old')

          let newFile = document.createElement('input')
          newFile.setAttribute('type','file')
          newFile.setAttribute('id','updateRawAddedFiles')
          newFile.multiple = true
          newFile.classList.add('form-control','font-monospace','m-2','super-edit-style')


          let id = document.createElement('input')
          id.setAttribute('type','hidden')
          id.setAttribute('name','postId')
          id.setAttribute('id','updatePostIdForRaw')
          id.setAttribute('value',response.id)

          let textArea = document.createElement('textarea')
          textArea.setAttribute('name','updatePostText')
          textArea.setAttribute('value',response.description)
          textArea.classList.add('form-control','font-monospace','m-2','super-edit-style')
          textArea.textContent = response.description

          const formDiv = document.createElement('div')
          formDiv.setAttribute('id','rawNewPhotoUploadForm')

          form.appendChild(newFile)
          form.appendChild(id)
          form.appendChild(textArea)
          formDiv.appendChild(form)
          div.appendChild(formDiv)

          for(r of response.resources){ 
            const fileName = r.description;
    
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-item';
            previewItem.setAttribute('id','old-raw-file-'+r.id)
            previewItem.classList.add('card')
            previewItem.classList.add('shadow') 
            previewItem.classList.add('d-flex')
            previewItem.style.width = '300px'
    
            const icon = document.createElement('i')
            icon.classList.add('fa-solid')
            icon.classList.add('fa-box-archive')
            icon.classList.add('text-success')
            icon.classList.add('mx-2')
    
            // Display file name
            const fileNamePara = document.createElement('input');
            fileNamePara.setAttribute('value',fileName)
            fileNamePara.setAttribute('id','old-raw-file-caption-'+r.id)
            fileNamePara.classList.add('font-monospace')
            fileNamePara.setAttribute('hidden','hidden')

            const nameDiv = document.createElement('div')
            nameDiv.textContent = fileName


            const oldRawFileId  = document.createElement('input')
            oldRawFileId.setAttribute('id','oldRawFileId')
            oldRawFileId.setAttribute('value',r.id)
            oldRawFileId.style.display = 'none'

            const oldRawFileUrl = document.createElement('input')
            oldRawFileUrl.setAttribute('value',r.raw)
            oldRawFileUrl.setAttribute('id','old-raw-file-url-'+r.id)

            const trash = document.createElement('i')
            trash.classList.add('fa-solid','fa-trash')

            const deleteBtn = document.createElement('btn') 
            deleteBtn.setAttribute('onclick',`deleteRawFileResource(${r.id})`) 
            deleteBtn.classList.add('btn','btn-danger','font-monospace')
            deleteBtn.appendChild(trash)

    
            const mDiv = document.createElement('div')
            mDiv.classList.add('d-flex')
            mDiv.style.alignContent = 'center'
            mDiv.style.alignItems = 'center' 
    
            mDiv.appendChild(icon)
            mDiv.appendChild(nameDiv)
            mDiv.appendChild(fileNamePara)
            mDiv.appendChild(oldRawFileId) 
    
            previewItem.appendChild(mDiv) 
            previewItem.appendChild(deleteBtn)
            oldRawFile.appendChild(previewItem)
            div.appendChild(previewItem)

            deleteBtn.addEventListener('click',()=>{
                icon.style.display = 'none'
                fileNamePara.style.display = 'none'
                nameDiv.style.display = 'none'
                deleteBtn.style.display = 'none'
            })

            newFile.addEventListener('change', function () {
                console.log('wowowowow')

                preview.innerHTML = '';
                console.log(preview)
            
                const files = document.getElementById('updateRawAddedFiles').files
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const fileName = file.name.toLowerCase();
            
                    const previewItem = document.createElement('div');
                    previewItem.className = 'preview-item';
                    previewItem.classList.add('card')
                    previewItem.classList.add('shadow') 
                    previewItem.classList.add('d-flex')
                    previewItem.style.width = '300px'
            
                    const icon = document.createElement('i')
                    icon.classList.add('fa-solid')
                    icon.classList.add('fa-box-archive')
                    icon.classList.add('text-success')
                    icon.classList.add('mx-2')
            
                    // Display file name
                    const fileNamePara = document.createElement('p');
                    fileNamePara.textContent = fileName;
                    fileNamePara.classList.add('font-monospace')
            
                    const mDiv = document.createElement('div')
                    mDiv.classList.add('d-flex')
                    mDiv.style.alignContent = 'center'
                    mDiv.style.alignItems = 'center'
            
                    mDiv.appendChild(icon)
                    mDiv.appendChild(fileNamePara)
            
                    previewItem.appendChild(mDiv) 
            
            
            
                    preview.appendChild(previewItem); 
                }
            });

          }

    }else{
        rawButton.style.display = 'none'
        resourceButton.style.display = 'block'
    let row = ''
    row += `
  
    
    <div>

    <div>
    <form id="updatePostForm">
    <b class="font-monospace m-2" >ADD new DATA <i class="fa-solid fa-plus"></i></b>
    <input type="file" id="updateAddedFiles" class="form-control font-monospace m-2" multiple>
    <div id="updatePreview"></div>
    <input type="hidden" style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);" id="UpdatePostId"  value="${response.id}" name="postId">
     
    <b class="font-monospace m-2">OLD DATA <i class="fa-solid fa-pen"></i></b></br>
    <textarea name="updatePostText" style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);"  class="form-control font-monospace m-2">${response.description}</textarea> 
    </form>
    </div>
  
   `
    response.resources.forEach((r, index) => {
        row += `
    <div  class="d-block" class="deletedResource-id" id="deletedResource-${r.id}">
    <div class="d-flex">
    <input type="hidden" id="resourceId" value="${r.id}">
    <textarea style="border: none; width:150px; height:70px; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);"id="${r.id}-caption" class="form-control font-monospace m-2" name="captionOfResource">${r.description}</textarea>`
        if (r.video === null) {
            row += `
        <img  style="width:100px; border-radius:10px; height:100px; height:100px;" alt="deleted"  id="${r.id}-url" value="${r.photo}" src ="${r.photo}">
        <button style="width:60px; height:30px; border-radius:10px; font-size:11px;" class="btn btn-danger font-monospace m-2"  onclick="deleteResource(${r.id})">Delete</button> 
        `
        }
        if (r.photo === null) {
            row += `
        <video style="width:100px; border-radius:10px; height:100px; height:100px;" alt="deleted" id="${r.id}-url" value="${r.video}" controls src="${r.video}"></video>
        <button style="width:60px; height:30px; border-radius:10px; font-size:11px;" class="btn btn-danger font-monospace m-2"  onclick="deleteResource(${r.id})">Delete</button> 
        `
        }

        row+=`</div>
        </div>`
    })

    row += `
    
    </div>
     
    `
    div.innerHTML = row

    let updateFiles = document.getElementById('updateAddedFiles')
    console.log(updateFiles.value)
    updateFiles.addEventListener('change', async function () {
        console.log('here here')
        const preview = document.getElementById('updatePreview');
        preview.classList.add('d-block') 
        preview.innerHTML = '';
        const files = document.getElementById('updateAddedFiles').files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileName = file.name.toLowerCase();
            console.log(fileName)
            console.log(fileName.split('.').pop())
            const validImageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'tif', 'psv', 'svg', 'webp', 'ico', 'heic'];
            const validVideoExtensions = ['mp4', 'avi', 'mkv', 'mov', 'wmv', 'flv', 'mpeg', 'mpg', 'webm', '3gp', 'ts'];
            if (validImageExtensions.includes(fileName.split('.').pop()) || validVideoExtensions.includes(fileName.split('.').pop())) {
                const previewItem = document.createElement('div');
                previewItem.className = 'preview-item';
                if (validImageExtensions.includes(fileName.split('.').pop())) {
                    const reader = new FileReader();
                    reader.onload = function (event) {
                        const img = document.createElement('img');
                        img.src = event.target.result;
                        img.style.maxWidth = '100px';
                        img.style.maxHeight = '100px';
                        img.style.borderRadius = '10px'
                        img.style.marginRight = '5px'
                        previewItem.appendChild(img);
                        preview.classList.add('form-control')
                    };
                    reader.readAsDataURL(file);
                } else if (validVideoExtensions.includes(fileName.split('.').pop())) {
                    const video = document.createElement('video');
                    video.src = URL.createObjectURL(file);
                    video.style.maxWidth = '100px';
                    video.style.maxHeight = '100px';
                    video.style.borderRadius = '10px'
                    video.style.marginRight = '5px'
                    video.controls = true;
                    previewItem.appendChild(video);
                    preview.classList.add('form-control')
                }

                // Create caption input
                const captionInput = document.createElement('textarea');
                captionInput.classList.add('form-control')
                captionInput.type = 'text';
                captionInput.style.width = '200px'
                captionInput.style.height = '70px'
                captionInput.placeholder = 'Enter caption';
                captionInput.setAttribute('id',`updateCaption-${i}`)

                const pDiv = document.createElement('div')
                pDiv.classList.add('d-flex')
                pDiv.style.marginLeft = '20px'
                pDiv.style.marginBottom = '10px'
                pDiv.appendChild(previewItem)
                pDiv.appendChild(captionInput)

                preview.appendChild(pDiv); 
            } else {
                alert('Invalid file type. Please select a JPG, JPEG or PNG file.');
                document.getElementById('updateAddedFiles').value = '';
            }


        }
    })

}
}

document.getElementById('raw').addEventListener('change', function () {
    const preview = document.getElementById('raw-preview');
    preview.innerHTML = '';

    const files = this.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name.toLowerCase();

        const previewItem = document.createElement('div');
        previewItem.className = 'preview-item';
        previewItem.classList.add('card')
        previewItem.classList.add('shadow') 
        previewItem.classList.add('d-flex')
        previewItem.style.width = '300px'

        const icon = document.createElement('i')
        icon.classList.add('fa-solid')
        icon.classList.add('fa-box-archive')
        icon.classList.add('text-success')
        icon.classList.add('mx-2')

        // Display file name
        const fileNamePara = document.createElement('p');
        fileNamePara.textContent = fileName;
        fileNamePara.classList.add('font-monospace')

        const mDiv = document.createElement('div')
        mDiv.classList.add('d-flex')
        mDiv.style.alignContent = 'center'
        mDiv.style.alignItems = 'center'

        mDiv.appendChild(icon)
        mDiv.appendChild(fileNamePara)

        previewItem.appendChild(mDiv) 



        preview.appendChild(previewItem);
    }
});


function removePreview() {
    document.getElementById('preview').innerHTML = ''
    document.getElementById('postForm').reset()
}


const removeCat = async () =>{
    cat.classList.add('hidden')
    mark.classList.remove('hidden')
   }


async function getUpdateData() {
    let updateResourcesDtos = []
    const value = document.querySelectorAll('#resourceId')
    value.forEach(v => console.log(v.value))
    value.forEach(v => {
        const cap = document.getElementById(`${v.value}-caption`)
        let caption = cap.value
        console.log(caption)
        const url = document.getElementById(`${v.value}-url`)
        let resourceUrl = url.src
        console.log(resourceUrl)
        if (resourceUrl == 'http://localhost:8080/null' || resourceUrl == 'http://localhost:8080/deleted'  || resourceUrl === 'http://localhost:8080/api/community/deleted') {
            let dto = {
                resourceId: v.value,
                postCaption: 'deleted',
                postUrl: 'deleted'
            }
            updateResourcesDtos.push(dto)
        } else {
            let dto = {
                resourceId: v.value,
                postCaption: caption,
                postUrl: resourceUrl
            }
            updateResourcesDtos.push(dto)

        }
        console.log(updateResourcesDtos)
    })
    console.log(updateResourcesDtos)
    let data = new FormData(document.getElementById('updatePostForm'))
    let newFiles = document.getElementById('updateAddedFiles').files
    let captions = []
    for (let i = 0; i < newFiles.length; i++) {
        data.append('files', newFiles[i])
        const captionInput = document.getElementById(`updateCaption-${i}`)
        if (captionInput) {
            captions.push(captionInput.value + '');
        } else {
            captions.push('')
        }
    }
    data.append('captions', captions);
    console.log(Object.fromEntries(data.entries()))
    let firstResponse = await fetch('/post/firstUpdate', {
        method: 'POST',
        body: data
    })
    let firstResult = await firstResponse.json()
    console.log(firstResult)
    let secondResponse = await fetch('/post/secondUpdate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateResourcesDtos)
    })
    let secondResult = await secondResponse.json()
    console.log(secondResult)
    if(secondResult){
        await removeCat()
    }
    if (secondResult) {
        await removeCat()
        // while (newsfeed.firstChild) {
        //     newsfeed.removeChild(newsfeed.firstChild)
        // }
        const p = await fetchPostById(Object.fromEntries(data.entries()).postId);
        const ParentDetailModal = document.getElementById('detail-modal-'+p.id)
        const childModalBox  = document.getElementById('newsfeedPost'+p.id)
        console.log('8888888888888888888888888888888888888'+p)
            const contentSection = document.getElementById(`post-update-section-${p.id}`);
                const postId = p.id;
                console.log("Want to know",postId);
                const postContent = document.querySelector(`.post-content-${postId}`);
                if (postContent && childModalBox) {
                    console.log('Remove Successfully')
                    postContent.remove();
                    childModalBox.remove()
                }
                // const divContent = document.createElement('div');
                // divContent.classList.add(`post-content-${postId}`);
                // divContent.setAttribute('data-bs-toggle', 'modal');
                // divContent.setAttribute('data-bs-target', `#newsfeedPost${postId}`);
                // console.log('post added ');
                let post = '';
                post+= `<div class="post-content-${p.id}" data-bs-toggle="modal" data-bs-target="#newsfeedPost${p.id}" >
            ${p.description.replace(/\n/g, '<br>')}
            `
                let oneTag = null
                let oneCloseTag = null
                let twoTag = null
                let twoCloseTag = null
                let threeTag = null
                let threeCloseTag = null
                let fourTag = null
                let fourCloseTag = null
                let fiveTag = null
                let fiveCloseTag = null
                let oneControlAttr = null
                let twoControlAttr = null
                let threeControlAttr = null
                let fourControlAttr = null
                let fiveControlAttr = null
                let one = null
                let two = null
                let three = null
                let four = null
                let five = null
                let six = null

                if(p.resources.length === 1){
                    p.resources.forEach((r, index) => {
                        if(index === 0 && r.photo !== null){
                            console.log('two')
                            one = r.photo
                            oneTag = 'img'
                            oneCloseTag = ''
                            oneControlAttr = ''
                        }else if(index === 0 && r.video !== null){
                            one = r.video
                            oneTag = 'video'
                            oneCloseTag = '</video>'
                            oneControlAttr = 'controls'
                        }
                        if (one !== null  ) {
                            post+= `
            <div class="d-flex" >
        <${oneTag} ${oneControlAttr} src="${one}" class="img-fluid " style="width:500px; border-radius : 5px; height:500px;  " alt="">${oneCloseTag}
            </div>
                `
                        }
                    })
                }
                if(p.resources.length === 2){
                    p.resources.forEach((r, index) => {
                        if(index === 0 && r.photo !== null){
                            console.log('two')
                            one = r.photo
                            oneTag = 'img'
                            oneCloseTag = ''
                            oneControlAttr = ''
                        }else if(index === 0 && r.video !== null){
                            one = r.video
                            oneTag = 'video'
                            oneCloseTag = '</video>'
                            oneControlAttr = 'controls'
                        }
                        if(index === 1 && r.photo !== null){
                            two = r.photo
                            twoTag = 'img'
                            twoCloseTag = ''
                            twoControlAttr = ''
                        }else if(index === 1 && r.video !== null){
                            two = r.video
                            twoTag = 'video'
                            twoCloseTag = '</video>'
                            twoControlAttr = 'controls'
                        }
                        if (one !== null && two !== null  ) {
                            post+= `
            <div class="d-flex" >
        <${oneTag} ${oneControlAttr} src="${one}" class="img-fluid " style="width:250px; border-radius : 5px; height:400px; margin:2px" alt="">${oneCloseTag}
        <${twoTag} ${twoControlAttr} src="${two}" class="img-fluid " style="width:250px; border-radius : 5px; height:400px; margin:2px" alt="">${twoCloseTag}
            </div> `
    }
})
}
if(p.resources.length === 3){
    p.resources.forEach((r, index) => {
        if(index === 0 && r.photo !== null){
            console.log('two')
            one = r.photo
            oneTag = 'img'
            oneCloseTag = ''
            oneControlAttr = ''
        }else if(index === 0 && r.video !== null){
            one = r.video
            oneTag = 'video'
            oneCloseTag = '</video>'
            oneControlAttr = 'controls'
        }
        if(index === 1 && r.photo !== null){
            two = r.photo
            twoTag = 'img'
            twoCloseTag = ''
            twoControlAttr = ''
        }else if(index === 1 && r.video !== null){
            two = r.video
            twoTag = 'video'
            twoCloseTag = '</video>'
            twoControlAttr = 'controls'
        }
        if(index === 2 && r.photo !== null){
            three = r.photo
            threeTag = 'img'
            threeCloseTag = ''
            threeControlAttr = ''
        }else if(index === 2 && r.video !== null){
            three = r.video
            threeTag = 'video'
            threeCloseTag = '</video>'
            threeControlAttr = 'controls'
        }
        if (one !== null && two !== null && three !== null  ) {
            post+= `
  <div class="d-flex" >
  <${oneTag} ${oneControlAttr} src="${one}" class="img-fluid " style="width:250px; border-radius : 5px; height:200px; margin:2px" alt="">${oneCloseTag}
  <${twoTag} ${twoControlAttr} src="${two}" class="img-fluid " style="width:250px; border-radius : 5px; height:200px; margin:2px" alt="">${twoCloseTag}
  </div>
  <div class="d-flex">
  <${threeTag} ${threeControlAttr} src="${three}" class="img-fluid " style="width:250px; border-radius : 5px; height:200px; margin-left:127px" alt="">${threeCloseTag}
  </div>`
        }
    })
}
if(p.resources.length === 4){
    p.resources.forEach((r, index) => {
        console.log(r)

        if(index === 0 && r.photo !== null){
            console.log('two')
            one = r.photo
            oneTag = 'img'
            oneCloseTag = ''
            oneControlAttr = ''
        }else if(index === 0 && r.video !== null){
            one = r.video
            oneTag = 'video'
            oneCloseTag = '</video>'
            oneControlAttr = 'controls'
        }
        if(index === 1 && r.photo !== null){
            two = r.photo
            twoTag = 'img'
            twoCloseTag = ''
            twoControlAttr = ''
        }else if(index === 1 && r.video !== null){
            two = r.video
            twoTag = 'video'
            twoCloseTag = '</video>'
            twoControlAttr = 'controls'
        }
        if(index === 2 && r.photo !== null){
            three = r.photo
            threeTag = 'img'
            threeCloseTag = ''
            threeControlAttr = ''
        }else if(index === 2 && r.video !== null){
            three = r.video
            threeTag = 'video'
            threeCloseTag = '</video>'
            threeControlAttr = 'controls'
        }
        if(index === 3 && r.photo !== null){
            four = r.photo
            fourTag = 'img'
            fourCloseTag = ''
            fourControlAttr = ''
        }else if(index === 3 && r.video !== null){
            four = r.video
            fourTag = 'video'
            fourCloseTag = '</video>'
            fourControlAttr = 'controls'
        }


        if (one !== null && two !== null && three !== null && four !== null) {
            post+= `
      <div class="d-flex" >
      <${oneTag} ${oneControlAttr} src="${one}" class="img-fluid " style="width:250px; border-radius : 5px; height:200px; margin:2px" alt="">${oneCloseTag}
      <${twoTag} ${twoControlAttr} src="${two}" class="img-fluid " style="width:250px; border-radius : 5px; height:200px; margin:2px" alt="">${twoCloseTag}
      </div>
      <div class="d-flex">
      <${threeTag} ${threeControlAttr} src="${three}" class="img-fluid " style="width:250px; border-radius : 5px; height:200px; margin:2px" alt="">${threeCloseTag}
      <${fourTag} ${fourControlAttr} src="${four}" class="img-fluid " style="width:250px; border-radius : 5px; height:200px; margin:2px;  opacity: 20%" alt="">${fourCloseTag}
      </div>`
        }
    })

}

if(p.resources.length > 4 ){
    let text = p.resources.length -4
    console.log(text)
    p.resources.forEach((r, index) => {
        if(index === 0 && r.photo !== null){
            console.log('two')
            one = r.photo
            oneTag = 'img'
            oneCloseTag = ''
            oneControlAttr = ''
        }else if(index === 0 && r.video !== null){
            one = r.video
            oneTag = 'video'
            oneCloseTag = '</video>'
            oneControlAttr = 'controls'
        }
        if(index === 1 && r.photo !== null){
            two = r.photo
            twoTag = 'img'
            twoCloseTag = ''
            twoControlAttr = ''
        }else if(index === 1 && r.video !== null){
            two = r.video
            twoTag = 'video'
            twoCloseTag = '</video>'
            twoControlAttr = 'controls'
        }
        if(index === 2 && r.photo !== null){
            three = r.photo
            threeTag = 'img'
            threeCloseTag = ''
            threeControlAttr = ''
        }else if(index === 2 && r.video !== null){
            three = r.video
            threeTag = 'video'
            threeCloseTag = '</video>'
            threeControlAttr = 'controls'
        }
        if(index === 3 && r.photo !== null){
            four = r.photo
            fourTag = 'img'
            fourCloseTag = ''
            fourControlAttr = ''
        }else if(index === 3 && r.video !== null){
            four = r.video
            fourTag = 'video'
            fourCloseTag = '</video>'
            fourControlAttr = 'controls'
        }
        if(index === 4 && r.photo !== null){
            five = r.photo
            fiveTag = 'img'
            fiveCloseTag = ''
            fiveControlAttr = ''
        }else if(index === 4 && r.video !== null){
            five = r.video
            fiveTag = 'video'
            fiveCloseTag = '</video>'
            fiveControlAttr = 'controls'
        }

        if(index === 5 ){
            six = 'hello'
        }

        if (one !== null && two !== null && three !== null && four !== null && five !== null && six === null) {

            post+= `
      <div class="d-flex" >
      <${oneTag} ${oneControlAttr} src="${one}" class="img-fluid " style="width:250px; border-radius : 5px; height:200px; margin:2px" alt="">${oneCloseTag}
      <${twoTag} ${twoControlAttr} src="${two}" class="img-fluid " style="width:250px; border-radius : 5px; height:200px; margin:2px" alt="">${twoCloseTag}
      </div>
      <div class="d-flex">
      <${threeTag} ${threeControlAttr} src="${three}" class="img-fluid " style="width:166px; border-radius : 5px; height:200px; margin:2px" alt="">${threeCloseTag}
      <${fourTag} ${fourControlAttr} src="${four}" class="img-fluid " style="width:166px; border-radius : 5px; height:200px; margin:2px" alt="">${fourCloseTag}
      <div style="position: relative; display: inline-block;">
      <${fiveTag} ${fiveControlAttr} src="${five}" class="img-fluid" style="width:166px; border-radius : 5px; height:200px; margin:2px" alt="">${fiveCloseTag}
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 25px;">+${text}</div>
      </div>
      </div>`
        }

    })

}
post += `
      </div>`
      let mod = ''

mod +=` <div class="modal fade" id="newsfeedPost${p.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg"  >
    <div class="modal-content" style=" background-color:transparent;  overflow-y: hidden;">
      <div class="modal-body p-0">
        <div id="carouselExampleControlsPostSearch${p.id}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">`

                p.resources.forEach((r, index) => {
                    let active = index == 0 ? 'active' : ''
                    if (r.photo === null && r.video !== null) {
                        mod += ` <div   class="carousel-item ${active}" style="object-fit: cover; width:100%; height : 600px;" >
              <video controls id="myVideo"  src="${r.video}" class="d-block  carousel-image " style=" width:100%; height : 100%;"alt="..."></video>
              <div class="carousel-caption d-none d-md-block">
              <p>${r.description.replace(/\n/g, '<br>')}</p>
            </div>
              </div> `
                    } else if (r.video === null && r.photo !== null) {
                        mod += `<div    class="carousel-item ${active}" style="object-fit: cover; width:100%; height : 600px;">
              <img  src="${r.photo}"   class="d-block  carousel-image " style=" width:100%; height : 100%;" alt="...">
              <div class="carousel-caption d-none d-md-block">
              <p>${r.description.replace(/\n/g, '<br>')}</p>
            </div>
            </div>`
                    } else {
                        mod += `<div    class="carousel-item ${active}" style="object-fit: cover; width:100%; height : 600px;">
              <video id="myVideo" controls src="${r.video}" class="d-block  carousel-image " style=" width:100%; height : 100%;" alt="..."></video>
              <div class="carousel-caption d-none d-md-block">
              <p>${r.description.replace(/\n/g, '<br>')}</p>
            </div>
            </div>`
                        mod += `<div    class="carousel-item ${active}" style="object-fit: cover; width:100%; height : 600px;">
            <img src="${r.photo}"class="d-block  carousel-image " style=" width:100%; height : 100%;"alt="...">
            <div class="carousel-caption d-none d-md-block">
            <p>${r.description.replace(/\n/g, '<br>')}</p>
          </div>
          </div>
           `
                    }
                })
                mod+=`

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsPostSearch${p.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsPostSearch${p.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  `

  ParentDetailModal.innerHTML = mod
  contentSection.innerHTML = post
        // postCount = 0
    }
}

function deleteResource(id) {
    document.getElementById(id + '-url').src = 'deleted'
    document.getElementById(id + '-caption').value = ''
    console.log('removed')
    console.log(document.getElementById(id + '-url').src)
}

const displayNoPostMessage = () => {
    let footerDiv = document.querySelector('.copyright');
    footerDiv.innerHTML = '';
    const divEl = document.createElement('div');
        divEl.style.fontSize = '20px';
        divEl.innerHTML = 'No posts available';
        footerDiv.appendChild(divEl);

}

window.addEventListener('load', async function () {
    let data = await this.fetch('/event/refresh', {
        method: 'GET'
    })
    console.log(data)
})

async function createPollPost() {
    let data = new FormData(document.getElementById('pollForm'));
    console.log(Object.fromEntries(data.entries()));
    let response = await fetch('/event/createEvent', {
        method: 'POST',
        body: data
    });
    let result = await response.json()
    console.log(result)
}

// async function getAllEventsForPost(){
//     isFetchingForEvent = true
//     let rows =''
//     let data = await fetch(`/event/getEventsForNewsfeed/${currentPageForEvent}`,{
//         method : 'GET'
//     })
//     let response = await data.json()
//     isFetchingForEvent = false
//     let row = ''
//     console.log(response)
//     if(response.length===0){
//         hasMoreForEvent = false
//         displayNoPostMessage()
//     }else{
//         for(const r of response){
//             let createdTime = await timeAgo(new Date(r.created_date))
//             let expired = ''
//             if(new Date()>new Date(r.end_date)){
//                 expired=`
//
//     <div class="alert alert-danger d-flex align-items-center" style=" width:265px; position: absolute; top: 135px;  z-index: 1;" role="alert">
//     <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
//     <div>
//     <i class="fa-solid fa-triangle-exclamation"></i>
//     EVENT IS EXPIRED
//     </div>
//     </div>
//
//                 `
//             }
//
//
//             let photo = r.photo === null ? '/static/assets/img/eventImg.jpg' : r.photo
//             let startDate = new Date(r.start_date)
//             let startDay = startDate.getDate()
//             let startMonth = startDate.getMonth()+1
//             let startYear = startDate.getFullYear()
//             let startHours = startDate.getHours()
//             let startMinutes = startDate.getMinutes()
//             let endDate = new Date(r.end_date)
//             let endDay = endDate.getDate()
//             let endMonth = endDate.getMonth()+1
//             let endYear = endDate.getFullYear()
//             let endHours = endDate.getHours()
//             let endMinutes = endDate.getMinutes()
//             let formattedStartDate = `${startDay} / ${startMonth} / ${startYear}  `;
//             let formattedEndDate = `${endDay} / ${endMonth} / ${endYear}  `
//             let rows =   `
//
//             <div class="post">
//             <div class="post-top">
//                 <div class="dp">
//                     <img src="${r.user.photo}" alt="">
//                 </div>
//                 <div class="post-info">
//                     <p class="name">${r.user.name}</p>
//                     <span class="time">${createdTime}</span>
//                 </div>
//                             <div class="dropdown offset-8">
//           <a class=" dropdown-toggle" onclick="getEventDetail(${r.id})" href="#"   id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
//                 <i class="fas fa-ellipsis-h "></i>
//                 </a>
//
//           <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//             <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#eventEditModalBox">Edit</a></li>
//             <li><a class="dropdown-item" onclick="deleteEvent(${r.id})">Delete Post</a></li>
//           </ul>
//         </div>
//             </div>
//             <div class=" post-content" data-bs-toggle="modal" data-bs-target="#searchPost" >
//             <div class="card" style="width: 30rem;  margin-left:12px ;">
//       <div class="card-body">
//         <h5 class="card-title">${r.title}</h5>
//         <div class="d-flex align-items-start">
//         <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//         <button class="nav-link active  " id="v-${r.id}-photo-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-photo" type="button" role="tab" aria-controls="v-${r.id}-photo" aria-selected="true"><i class="fa-solid fa-image"></i>  </button>
//           <button class="nav-link  " id="v-${r.id}-about-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-about" type="button" role="tab" aria-controls="v-${r.id}-about" aria-selected="false"><i class="fa-solid fa-circle-info"></i>  </button>
//           <button class="nav-link" id="v-${r.id}-location-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-location" type="button" role="tab" aria-controls="v-${r.id}-location" aria-selected="false"><i class="fa-solid fa-location-dot"></i> </button>
//           <button class="nav-link" id="v-${r.id}-date-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-date" type="button" role="tab" aria-controls="v-${r.id}-date" aria-selected="false"><i class="fa-solid fa-clock"></i></button>
//         </div>
//         <div class="tab-content" id="v-${r.id}-tabContent">
//           <div class="tab-pane fade" id="v-${r.id}-about" role="tabpanel" aria-labelledby="v-${r.id}-about-tab">
//           <div class="text-center lh-sm font-monospace">
//           ${r.description}
//           </div>
//           </div>
//           <div class="tab-pane fade" id="v-${r.id}-location" role="tabpanel" aria-labelledby="v-${r.id}-location-tab">
//           <div class="text-center fs-5 fw-bold fst-italic font-monospace ml-3">
//           <div class="ml-5  mt-5 text-danger">${r.location}</div>
//           </div>
//           </div>
//           <div class="tab-pane fade" id="v-${r.id}-date" role="tabpanel" aria-labelledby="v-${r.id}-date-tab">
//           <div class="text-center fs-6 fw-bold mt-3  pl-2 font-monospace">
//           <div class="mt-2 ml-5 d-flex"><div class="text-secondary"> START </div> <i class="fa-solid fa-play text-danger mx-1"></i></br></div><div class="fst-italic"> ${formattedStartDate}</div></br>
//           <div class="mt-2 ml-5 d-flex"><div class="text-secondary"> END </div> <i class="fa-solid fa-play text-danger mx-1"></i><br></div><div class="fst-italic"> ${formattedEndDate}</div>
//            </div>
//            </div>
//           <div class="tab-pane fade show active" id="v-${r.id}-photo" role="tabpanel" aria-labelledby="v-${r.id}-photo-tab">
//           ${expired}
//           <b class="p-2"><img src="${r.photo}" style="width:250px; height:200px; border-radius:20px; position:relative;">
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//             </div>
//             <div class="post-bottom">
//                 <div class="action" style="height: 50px">
//         <div class="button_wrapper">
//               <div class="all_likes_wrapper">
//                   <div data-title="LIKE">
//                       <img src="/static/assets/img/like.png" alt="Like" />
//                   </div>
//                   <div data-title="LOVE">
//                       <img src="/static/assets/img/love.png" alt="Love" />
//                   </div>
//                   <div data-title="CARE">
//                       <img src="/static/assets/img/care.png" alt="Care" />
//                   </div>
//                   <div data-title="HAHA">
//                       <img src="/static/assets/img/haha.png" alt="Haha" />
//                   </div>
//                   <div data-title="WOW">
//                       <img src="/static/assets/img/wow.png" alt="Wow" />
//                   </div>
//                   <div data-title="SAD">
//                       <img src="/static/assets/img/sad.png" alt="Sad" />
//                   </div>
//                   <div data-title="ANGRY">
//                       <img src="/static/assets/img/angry.png" alt="Angry" />
//                   </div>
//               </div>
//               <button class="like_button" id=" ">
//               </button>
//           </div>
//                 </div>
//                 <div class="action">
//                     <i class="fa-regular fa-comment"></i>
//                     <span onclick="pressedComment()"  data-bs-toggle="modal" data-bs-target="#commentStaticBox">Comment  </span>
//                 </div>
//                 <div class="action">
//                     <i class="fa fa-share"></i>
//                     <span>Share</span>
//                 </div>
//             </div>
//         </div>
//         `;
//
//             row+= rows
//         };
//
//         let range = document.createRange();
//         let fragment = range.createContextualFragment(row);
//
//         eventDiv.appendChild(fragment)
//
//
//     }
//
// }
async function deletePost(id) {
    loadingModalBox.show()
    let data = await fetch('/post/deletePost/' + id, {
        method: 'GET'
    })
    let response = await data.json()
    console.log(response)
    if(response){
        await removeCat()
        const postList = document.getElementById(`post-delete-section-${id}`);
        if(postList){
            postList.remove();
        }
    }

}

const createEventPost = async () => {
    const title = document.getElementById('eventtitle').value;
    const description = document.getElementById('eventdescription').value;
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;

    if (!title || !description || !startDate || !endDate) {
        document.getElementById('eventForm').reset()
        alert('Title, description, start date, and end date are required.');
        return;
    }

    if (startDate > endDate) {
        document.getElementById('eventForm').reset()
        alert('Start date must be earlier than end date');
        return;
    }

    loadingModalBox.show();
    const data = new FormData(document.getElementById('eventForm'));
    console.log(Object.fromEntries(data.entries()));

    try {
        const response = await fetch('/event/createEvent', {
            method: 'POST',
            body: data
        });
        const result = await response.json();
        console.log(result);

        if (result) {
            document.getElementById('eventForm').reset();
            await removeCat();
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error creating the event. Please try again.');
    } finally {
        loadingModalBox.hide();
    }
};




let isLoadingPosts = false;

// window.addEventListener('scroll', async function () {
//
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         getAllEventsForPost()
//         postCount++;
//         console.log('End of scroll reached!');
//         isLoadingPosts = true;
//         let posts = await welcome(postCount);
//         console.log(postCount);
//         isLoadingPosts = false;
//     }
// });

 


async function getAllUserGroup(num) {
    let groups = document.getElementById('groupSelect' + num)
   await mentionCommunityMember();
    let data = await fetch('/api/community/loginUserGroups')
    let result = await data.json();
    console.log(result)
    let group = ''
    group += `<option selected  value=0>SELECT GROUP</option> `
    result.forEach((r, index) => {
        let active = index === 0 ? 'selected' : ''

        group +=
            `
 
  <option   value='${r.id}'>${r.name}</option> 

  `
    })

    groups.innerHTML = group
}
 

 

document.addEventListener('DOMContentLoaded', () => {
    loginUser = localStorage.getItem('staff_id');
    connect();
    notifyMessage().then();

});

let loginUser = null;
let stompClient = null;
let notificationCount = 0;
const connect = () => {
    let socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
        stompClient.subscribe(`/user/${loginUser}/like-private-message`, receivedMessageForReact);
        stompClient.subscribe(`/user/all/comment-private-message`, receivedMessageForComment);
        stompClient.subscribe(`/user/${loginUser}/comment-private-message`, receivedMessageForComment);
        stompClient.subscribe(`/user/all/comment-reply-private-message`, receivedMessageForCommentReply);
        stompClient.subscribe(`/user/mention/queue/messages`, receivedMessageForMention);
    });
};


document.getElementById('notiCountDecrease').addEventListener('click', () => {
    notificationCount = 0;
    showNotiCount().then();
});

const showNotiCount = async () => {
    const notiShow = document.getElementById('notiCount');
    notiShow.innerText = notificationCount;
    if (notificationCount === 0) {
        notiShow.innerText = "";
    }
};

const notifyMessage = async () => {
    const showMessage = document.getElementById('notifyMessage');
    const pElement = document.createElement('p');
    if (notificationCount === 0) {
        pElement.textContent = 'There is no notification yet!';
    } else {
        pElement.textContent = '';
    }
    showMessage.innerHTML = '';
    showMessage.appendChild(pElement);
};

const notifyMessageForReact = async (message, sender, photo, type) => {
    const spanElement = document.getElementById('notiId');
    spanElement.innerText = `You have ${notificationCount} new notifications`;
    const showMessage = document.getElementById('notifyMessage');
    showMessage.style.whiteSpace = 'nowrap';
    const containerDiv = document.createElement('div');
    const pElement = document.createElement('p');
    const imgElement = document.createElement('img');
    const imgReactElement = document.createElement('img');

    photo = photo || '/static/assets/img/default-logo.png';
    imgElement.src = `${photo}`;
    imgElement.width = 40;
    imgElement.height = 40;
    imgElement.style.borderRadius = '50%';
    pElement.textContent = sender + ' ' + message;
    pElement.style.fontWeight = 'bold';
    if (type) {
        imgReactElement.src = `/static/assets/img/${type.toLowerCase()}.png`;
        imgReactElement.width = 20;
        imgReactElement.height = 20;
    }

    containerDiv.style.display = 'flex';
    containerDiv.style.alignItems = 'center';
    // containerDiv.style.border = '1px solid';
    containerDiv.style.borderRadius = '10px';
    containerDiv.style.padding = '10px';
    containerDiv.style.marginBottom = '3px';

    const imgWrapper = document.createElement('div');
    imgWrapper.style.position = 'relative';

    const imgReactWrapper = document.createElement('div');
    imgReactWrapper.style.position = 'relative';
    imgReactWrapper.style.marginLeft = '10px';

    imgReactElement.style.position = 'absolute';
    imgReactElement.style.left = '50%';
    imgReactElement.style.transform = 'translateX(-50%)';
    imgReactElement.style.marginLeft = '-9px';
    imgWrapper.appendChild(imgElement);
    imgReactWrapper.appendChild(imgReactElement);

    containerDiv.appendChild(imgWrapper);
    containerDiv.appendChild(imgReactWrapper);
    containerDiv.appendChild(pElement);

    showMessage.appendChild(containerDiv);
};


const receivedMessageForReact = async (payload) => {
    console.log("Message Received");
    const message = await JSON.parse(payload.body);
    // await welcome();
    if (loginUser === message.staffId) {
        notificationCount = notificationCount + 1;
        await showNotiCount();
        await notifyMessageForReact(message.content, message.sender, message.photo, message.type);
    }
};

const pressedLike = async (id, type) => {
    console.log('PostId', id);
    const myObj = {
        postId: id,
        sender: loginUser,
        content: ` reacted to your post!`,
        type: type
    };
    stompClient.send('/app/react-message', {}, JSON.stringify(myObj));
};


 const getAllComments = async (id) => {
     const fetchComments = await fetch(`/getComment/${id}`);
     if (!fetchComments.ok) {
         alert('There is something wrong in the comment section,Please try again!');
     }
     const getData = await fetchComments.json();
     const chatArea = document.querySelector('#commentMessageText');
     chatArea.innerHTML = '';
     for (const c of getData) {
         let localDateTime = new Date(c.localDateTime);
         await displayMessage(c.user.name, c.content, c.user.photo, c.id, c.post.id, localDateTime, chatArea);
         console.log('data time',localDateTime)
     }
 };

const displayMessage = async (sender, content, photo, id, postId,localDateTime,chatArea) => {
    const user = await fetchUserDataByPostedUser(loginUser);
    const divItem = document.createElement('div');
    divItem.classList.add(`user-item-${id}`);
    const userImage = document.createElement('img');
    photo = photo ||  '/static/assets/img/default-logo.png';
    userImage.src = `${photo}`;
    userImage.alt = 'User Photo';
    userImage.style.width = '60px';
    userImage.style.height = '60px';
    userImage.classList.add('user-photo');
    userImage.style.border = '2px solid #ccc';
    const spanSender = document.createElement('span');
    if (sender === user.name) {
        spanSender.innerHTML = `You : `;
    } else {
        spanSender.innerHTML = `${sender} : `;
    }
    const formattedContent = await highlightMentions(content);
    const spanElement = document.createElement('span');
    spanElement.classList.add(`comment-span-container-${id}`);
    spanElement.id = id;
    spanElement.innerHTML = `${formattedContent}`;
    // divItem.style.border = '1px solid lightslategrey';
    divItem.style.padding = '5px';
    divItem.style.borderRadius = '30px'
    divItem.style.width = '450px';

    const convertDiv = document.createElement('div');
    convertDiv.classList.add('content-container');
    let createdTime = await timeAgo(new Date(localDateTime))
    convertDiv.setAttribute('data-toggle', 'tooltip');
    convertDiv.setAttribute('title', `${createdTime}`);
    const spanElementForImg = document.createElement('span');
    spanElementForImg.appendChild(userImage);
    divItem.appendChild(spanElementForImg);
    convertDiv.style.marginLeft = '70px';
    convertDiv.style.marginTop = '-50px';
    convertDiv.style.padding = '25px';
    convertDiv.style.borderBottomRightRadius = '20px';
    convertDiv.style.backgroundColor = 'lightgrey';
    convertDiv.style.borderTopLeftRadius = '10px';
    convertDiv.style.borderBottomLeftRadius = '35px';
    divItem.appendChild(convertDiv);
    const ddEl = document.createElement('div');
    ddEl.classList.add(`comment-container-${id}`);
    ddEl.appendChild(spanSender);
    ddEl.appendChild(spanElement);
    convertDiv.appendChild(ddEl);
    chatArea.appendChild(divItem);

    const likeIconWithoutColor = document.createElement('i');
    likeIconWithoutColor.classList.add('fa-regular', 'fa-thumbs-up');
    likeIconWithoutColor.style.fontSize = '20px';
    likeIconWithoutColor.addEventListener('click', () => {
        if (iconDiv.contains(dislikeIconWithColor)) {
            iconDiv.removeChild(dislikeIconWithColor);
        }
        iconDiv.appendChild(dislikeIconWithoutColor);
        iconDiv.removeChild(likeIconWithoutColor);
        iconDiv.appendChild(likeIconWithColor);
        const myObj = {
            postId: postId,
            commentId: id,
            sender: loginUser,
            content: ` liked  your comment!`,
            type: 'LIKE',
        }
        stompClient.send('/app/like-commentReact-message', {}, JSON.stringify(myObj));
    });
    const likeIconWithColor = document.createElement('i');
    likeIconWithColor.style.fontSize = '20px';
    likeIconWithColor.classList.add('fa-solid', 'fa-thumbs-up');
    likeIconWithColor.addEventListener('click', () => {
        if (iconDiv.contains(dislikeIconWithColor)) {
            iconDiv.removeChild(dislikeIconWithColor);
        }
        iconDiv.appendChild(dislikeIconWithoutColor);
        iconDiv.removeChild(likeIconWithColor);
        iconDiv.appendChild(likeIconWithoutColor);
        const myObj = {
            postId: postId,
            commentId: id,
            sender: loginUser,
            content: ` liked  your comment!`,
            type: null,
        }
        stompClient.send('/app/like-commentReact-message', {}, JSON.stringify(myObj));
    });
    const dislikeIconWithoutColor = document.createElement('i');
    dislikeIconWithoutColor.classList.add('fa-regular', 'fa-thumbs-down');
    dislikeIconWithoutColor.style.fontSize = '20px';
    dislikeIconWithoutColor.style.padding = '10px';
    dislikeIconWithoutColor.addEventListener('click', () => {
        iconDiv.removeChild(dislikeIconWithoutColor);
        iconDiv.appendChild(dislikeIconWithColor);
        if (iconDiv.contains(likeIconWithColor)) {
            iconDiv.removeChild(likeIconWithColor);
        }
        iconDiv.appendChild(likeIconWithoutColor);
        const myObj = {
            postId: postId,
            commentId: id,
            sender: loginUser,
            content: ` disliked  your comment!`,
            type: 'DISLIKE',
        }
        stompClient.send('/app/like-commentReact-message', {}, JSON.stringify(myObj));
    });
    const dislikeIconWithColor = document.createElement('i');
    dislikeIconWithColor.classList.add('fa-solid', 'fa-thumbs-down');
    dislikeIconWithColor.style.fontSize = '20px';
    dislikeIconWithColor.style.padding = '10px';
    dislikeIconWithColor.addEventListener('click', () => {
        iconDiv.removeChild(dislikeIconWithColor);
        iconDiv.appendChild(dislikeIconWithoutColor);
        if (iconDiv.contains(likeIconWithColor)) {
            iconDiv.removeChild(likeIconWithColor);
        }
        iconDiv.appendChild(likeIconWithoutColor);
        const myObj = {
            postId: postId,
            commentId: id,
            sender: loginUser,
            content: ` dislike your comment!`,
            type: null,
        }
        stompClient.send('/app/like-commentReact-message', {}, JSON.stringify(myObj));
    });
    let replyInput = divItem.querySelector('.reply-input');
    let submitButton = divItem.querySelector('.submit-reply-btn');
    let cancelButton = divItem.querySelector('.cancel-reply-btn');

    const replyButton = document.createElement('i');
    replyButton.classList.add('fa-solid', 'fa-reply');
    replyButton.style.padding = '10px';
    replyButton.style.fontSize = '20px';
    replyButton.style.marginLeft = '310px';
    replyButton.id = id;

    replyButton.addEventListener('click', async () => {
        const commentUser = await fetchCommetedUser(id);
        const sanitizedUserName = commentUser.user.name.replace(/\s+/g, '');
        if (!replyInput) {
            replyInput = document.createElement('input');
            replyInput.type = 'text';
            replyInput.placeholder = 'Type your reply...';
            replyInput.classList.add('reply-input');
            replyInput.style.marginTop = '10px';
            replyInput.style.borderRadius = '10px';
            replyInput.value = `@${sanitizedUserName} : `;
            replyInput.style.padding = '8px';
            replyInput.readOnly = true;
            divItem.appendChild(replyInput);

            replyInput.addEventListener('focus', function () {
                replyInput.removeAttribute('readOnly');
                replyInput.classList.remove('readonly');
            });
            replyInput.addEventListener('blur', function () {
                replyInput.readOnly = true;
                replyInput.classList.add('readonly');
            });
        } else {
            replyInput.value = `@${sanitizedUserName} `;
            replyInput.readOnly = true;
            replyInput.classList.add('readonly');
        }

        replyInput.addEventListener('input', function () {
            if (replyInput.value === `@${sanitizedUserName} `) {
                replyInput.classList.add('readonly');
            } else {
                replyInput.classList.remove('readonly');
            }
        });

        if (!submitButton) {
            submitButton = document.createElement('button');
            submitButton.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'submit-reply-btn');
            submitButton.textContent = 'Submit';
            submitButton.addEventListener('click', async () => {
                const replyContent = replyInput.value.trim();
                if (replyContent !== '') {
                    const myObj = {
                        commentId: id,
                        sender: loginUser,
                        content: replyContent
                    };
                    stompClient.send('/app/comment-reply-message', {}, JSON.stringify(myObj));
                    const chatArea = document.querySelector('#commentMessageText');
                    // await displayMessage(user.name, replyContent, user.photo, id, postId, chatArea);
                    //
                    //  const reply = await createReplyElement(replyContent,user.name,user.photo,id,postId);
                    console.log(`Replying to comment ${id}: ${replyContent}`);
                    repliesContainer.style.display = 'block';
                    replyInput.value = '';
                } else {
                    alert('Please enter something that you want to reply.');
                }
            });
            divItem.appendChild(submitButton);
        }

        if (!cancelButton) {
            cancelButton = document.createElement('button');
            cancelButton.innerHTML = 'Cancel';
            cancelButton.classList.add('btn', 'btn-outline-secondary', 'btn-sm', 'cancel-reply-btn');
            cancelButton.addEventListener('click', () => {
                divItem.removeChild(replyInput);
                divItem.removeChild(submitButton);
                divItem.removeChild(cancelButton);
            });
            divItem.appendChild(cancelButton);
        }

        replyInput.focus();
    });
    divItem.appendChild(replyButton);
    const iconDiv = document.createElement('div');
    iconDiv.style.marginLeft = '345px';
    iconDiv.style.marginTop = '-40px';
    const react = await commentReactType(id, user.id, postId);
    if (react !== null && react.type === 'DISLIKE') {
        iconDiv.appendChild(dislikeIconWithColor);
    } else {
        iconDiv.appendChild(dislikeIconWithoutColor);
    }

    if (react !== null && react.type === 'LIKE') {
        iconDiv.appendChild(likeIconWithColor);
    } else {
        iconDiv.appendChild(likeIconWithoutColor);
    }
    divItem.appendChild(iconDiv);
    const replies = await fetchAndDisplayReplies(id);
    const repliesContainer = document.createElement('div');
    repliesContainer.classList.add(`replies-container-${id}`);
    repliesContainer.style.display = 'none';


    for (const reply of replies) {
        repliesContainer.appendChild(reply);
    }
    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');

    const dropDownIcon = document.createElement('i');
    dropDownIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
    dropDownIcon.style.padding = '15px';
    dropDownIcon.style.fontSize = '20px';
    dropDownIcon.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
    });

    const seeMoreButton = document.createElement('i');
    seeMoreButton.classList.add('fa-regular', 'fa-comment');
    seeMoreButton.style.padding = '10px';
    seeMoreButton.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
        repliesContainer.style.display = repliesContainer.style.display === 'none' ? 'block' : 'none';
    });

    dropdownMenu.appendChild(seeMoreButton);
    divItem.appendChild(dropdownMenu);

    if (sender === user.name) {
        const editIcon = document.createElement('i');
        editIcon.classList.add('fa-regular', 'fa-pen-to-square');
        editIcon.style.padding = '15px';
        editIcon.addEventListener('click', () => {
            dropdownMenu.style.display = 'none';
            let currentContent = null;
            if (convertDiv.contains(spanElement)) {
                currentContent = spanElement.innerHTML;
            }
            console.log('textArea', currentContent);
            const textarea = document.createElement('textarea');
            textarea.style.borderRadius = '10px';
            textarea.style.backgroundColor = 'lightgrey';
            textarea.value = currentContent;
            ddEl.replaceChild(textarea, spanElement);
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'save-button');
            saveButton.addEventListener('click', async () => {
                const updatedContent = textarea.value.trim();
                if (updatedContent !== '') {
                    const commentId = spanElement.id;
                    await updateContent(commentId, updatedContent);
                    spanElement.innerHTML = updatedContent;
                    ddEl.removeChild(textarea);
                    divItem.removeChild(saveButton);
                } else {
                    alert('Please enter something for the comment.');
                }
            });
            divItem.appendChild(saveButton);
        });
        dropdownMenu.appendChild(editIcon);

        const trashIcon = document.createElement('i');
        trashIcon.classList.add('fa-solid', 'fa-trash');
        trashIcon.style.padding = '10px';
        trashIcon.addEventListener('click', async () => {
            dropdownMenu.style.display = 'none';
            const commentId = spanElement.id;
            console.log("Span Element id", commentId);
            await deleteComment(commentId);
        });
        dropdownMenu.appendChild(trashIcon);
        divItem.appendChild(dropdownMenu);
    }
    const chDiv = document.createElement('div');
    chDiv.style.marginLeft = '410px';
    chDiv.style.marginTop = '-45px';
    chDiv.appendChild(dropDownIcon);
    divItem.appendChild(chDiv);
    const rpDiv = document.createElement('div');
    rpDiv.appendChild(repliesContainer);
    divItem.appendChild(rpDiv);
};

const onSuccess =async (id) => {
    const reply = await fetchAndDisplayLastReply(id);
    console.log('wow mal ya pr lr')
    await document.querySelector(`.replies-container-${id}`).appendChild(reply);
}

const fetchAndDisplayLastReply = async (id) => {
    const fetchReplies = await fetch(`/getAll-comment/${id}`);
    const fetchDataForReplies = await fetchReplies.json();
    const replyElement = document.createElement('div');
    const lastReplyIndex = fetchDataForReplies.length - 1;
    if (lastReplyIndex >= 0) {
        const reply = fetchDataForReplies[lastReplyIndex];
        replyElement.classList.add(`reply-item-${reply.id}`);
        let createdTimeForReply = await timeAgo(new Date(reply.localDateTime))
        replyElement.setAttribute('data-toggle', 'tooltip');
        replyElement.setAttribute('title', `${createdTimeForReply}`);
        const user = await fetchUserDataByPostedUser(loginUser);
        const userRpImage = document.createElement('img');
        const photo = reply.user.photo ||  '/static/assets/img/default-logo.png';
        userRpImage.src = `${photo}`;
        userRpImage.alt = 'User Photo';
        userRpImage.classList.add('user-photo');
        userRpImage.style.height = '50px';
        userRpImage.style.width = '50px';
        userRpImage.style.marginLeft = '50px';
        userRpImage.style.backgroundColor = '#cccccc';
        replyElement.classList.add('reply-item');
        const replySender = document.createElement('span');
        if (reply.user.name === user.name) {
            replySender.innerHTML = `You : `;
        } else {
            replySender.innerHTML = `${reply.user.name} : `;
        }
        const replyContent = document.createElement('span');
        replyContent.id = reply.id;
        const formattedContent = await highlightMentions(reply.content);
        replyContent.innerHTML = `${formattedContent}`;
        const spElement = document.createElement('span');
        const contentElement = document.createElement('span');
        const divEl = document.createElement('div');
        divEl.style.marginLeft = '110px';
        divEl.style.padding = '20px';
        divEl.style.backgroundColor = 'lightgrey';
        divEl.style.marginTop = '-30px';
        divEl.style.borderTopLeftRadius = '10px';
        divEl.style.borderBottomLeftRadius = '30px';
        divEl.style.borderBottomRightRadius = '15px';
        spElement.appendChild(userRpImage);
        replyElement.appendChild(spElement);
        divEl.appendChild(replySender);
        divEl.appendChild(replyContent);
        contentElement.appendChild(divEl);
        replyElement.appendChild(contentElement);

        let replyInputForReply = replyElement.querySelector('.reply-input');
        let submitButton = replyElement.querySelector('.submit-reply-btn');
        let cancelButton = replyElement.querySelector('.cancel-reply-btn');
        const replyButton = document.createElement('i');
        replyButton.style.padding = '10px';
        replyButton.style.marginLeft = '300px';
        replyButton.classList.add('fa-solid', 'fa-reply');
        replyButton.addEventListener('click',async () => {
            const replyUser = await fetchRepliedUserForData(reply.id);
            const sanitizedUserName = replyUser.user.name.replace(/\s+/g, '');
            if (!replyInputForReply) {
                replyInputForReply = document.createElement('input');
                replyInputForReply.type = 'text';
                replyInputForReply.placeholder = 'Type your reply...';
                replyInputForReply.classList.add('reply-input');
                replyInputForReply.style.marginTop = '10px';
                replyInputForReply.style.borderRadius = '10px';
                replyInputForReply.value = `@${sanitizedUserName} : `;
                replyInputForReply.style.padding = '8px';
                replyInputForReply.readOnly = true;
                replyElement.appendChild(replyInputForReply);

                replyInputForReply.addEventListener('focus', function () {
                    replyInputForReply.removeAttribute('readOnly');
                    replyInputForReply.classList.remove('readonly');
                });
                replyInputForReply.addEventListener('blur', function () {
                    replyInputForReply.readOnly = true;
                    replyInputForReply.classList.add('readonly');
                });
            } else {
                replyInputForReply.value = `@${sanitizedUserName} `;
                replyInputForReply.readOnly = true;
                replyInputForReply.classList.add('readonly');
            }

            replyInputForReply.addEventListener('input', function () {
                if (replyInputForReply.value === `@${sanitizedUserName} `) {
                    replyInputForReply.classList.add('readonly');
                } else {
                    replyInputForReply.classList.remove('readonly');
                }
            });
            if (!submitButton) {
                submitButton = document.createElement('button');
                submitButton.style.marginTop = '10px';
                submitButton.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'submit-reply-btn');
                submitButton.textContent = 'Submit';
                submitButton.addEventListener('click', async () => {
                    const replyContent = replyInputForReply.value.trim();
                    if (replyContent !== '') {
                        const myObj = {
                            replyId: reply.id,
                            sender: loginUser,
                            content: replyContent
                        };
                        stompClient.send('/app/comment-reply-message', {}, JSON.stringify(myObj));
                        const chatArea = document.querySelector('#commentMessageText');
                        //await displayMessage(user.name, replyContent, user.photo, id, reply.comment.post.id, chatArea);
                        console.log("kyi mal", user.name, replyContent, user.photo, id, reply.comment.post.id);
                        console.log(`Replying to comment ${id}: ${replyContent}`);
                        replyInputForReply.value = '';
                    } else {
                        alert('Please enter something that you want to reply.');
                    }
                });

                replyElement.appendChild(submitButton);
            }
            if (!cancelButton) {
                cancelButton = document.createElement('button');
                cancelButton.innerHTML = 'Cancel';
                cancelButton.style.marginTop = '10px';
                cancelButton.classList.add('btn', 'btn-outline-secondary', 'btn-sm', 'cancel-reply-btn');
                cancelButton.addEventListener('click', () => {
                    replyElement.removeChild(replyInputForReply);
                    replyElement.removeChild(submitButton);
                    replyElement.removeChild(cancelButton);
                });
                replyElement.appendChild(cancelButton);
            }
            replyInputForReply.focus();
        });
        replyElement.appendChild(replyButton);
        const likeIconWithoutColor = document.createElement('i');
        likeIconWithoutColor.classList.add('fa-regular', 'fa-thumbs-up');
        likeIconWithoutColor.style.fontSize = '20px';
        likeIconWithoutColor.addEventListener('click', () => {
            if (iconDiv.contains(dislikeIconWithColor)) {
                iconDiv.removeChild(dislikeIconWithColor);
            }
            iconDiv.appendChild(dislikeIconWithoutColor);
            iconDiv.removeChild(likeIconWithoutColor);
            iconDiv.appendChild(likeIconWithColor);
            const myObj = {
                postId: reply.id,
                commentId: id,
                sender: loginUser,
                content: ` like  your reply!`,
                type: 'LIKE',
            };

            stompClient.send('/app/like-replyReact-message', {}, JSON.stringify(myObj));
        });

        const likeIconWithColor = document.createElement('i');
        likeIconWithColor.style.fontSize = '20px';
        likeIconWithColor.classList.add('fa-solid', 'fa-thumbs-up');
        likeIconWithColor.addEventListener('click', () => {
            if (iconDiv.contains(dislikeIconWithColor)) {
                iconDiv.removeChild(dislikeIconWithColor);
            }
            iconDiv.appendChild(dislikeIconWithoutColor);
            iconDiv.removeChild(likeIconWithColor);
            iconDiv.appendChild(likeIconWithoutColor);
            const myObj = {
                postId: reply.id,
                commentId: id,
                sender: loginUser,
                content: ` liked  your reply!`,
                type: null,
            }
            stompClient.send('/app/like-replyReact-message', {}, JSON.stringify(myObj));
        });
        const dislikeIconWithoutColor = document.createElement('i');
        dislikeIconWithoutColor.classList.add('fa-regular', 'fa-thumbs-down');
        dislikeIconWithoutColor.style.fontSize = '20px';
        dislikeIconWithoutColor.style.padding = '10px';
        dislikeIconWithoutColor.addEventListener('click', () => {
            iconDiv.removeChild(dislikeIconWithoutColor);
            iconDiv.appendChild(dislikeIconWithColor);
            if (iconDiv.contains(likeIconWithColor)) {
                iconDiv.removeChild(likeIconWithColor);
            }
            iconDiv.appendChild(likeIconWithoutColor);
            const myObj = {
                postId: reply.id,
                commentId: id,
                sender: loginUser,
                content: ` dislike your reply!`,
                type: 'DISLIKE',
            }
            stompClient.send('/app/like-replyReact-message', {}, JSON.stringify(myObj));
        });
        const dislikeIconWithColor = document.createElement('i');
        dislikeIconWithColor.classList.add('fa-solid', 'fa-thumbs-down');
        dislikeIconWithColor.style.fontSize = '20px';
        dislikeIconWithColor.style.padding = '10px';
        dislikeIconWithColor.addEventListener('click', () => {
            iconDiv.removeChild(dislikeIconWithColor);
            iconDiv.appendChild(dislikeIconWithoutColor);
            if (iconDiv.contains(likeIconWithColor)) {
                iconDiv.removeChild(likeIconWithColor);
            }
            iconDiv.appendChild(likeIconWithoutColor);
            const myObj = {
                postId: reply.id,
                commentId: id,
                sender: loginUser,
                content: ` dislike your comment!`,
                type: null,
            }
            stompClient.send('/app/like-replyReact-message', {}, JSON.stringify(myObj));
        });

        const iconDiv = document.createElement('div');
        iconDiv.style.marginLeft = '360px';
        iconDiv.style.marginTop = '-40px';
        const isReact = await replyReactType(id, user.id, reply.id);
        if (isReact !== null && isReact.type === 'DISLIKE') {
            iconDiv.appendChild(dislikeIconWithColor);
        } else {
            iconDiv.appendChild(dislikeIconWithoutColor);
        }

        if (isReact !== null && isReact.type === 'LIKE') {
            iconDiv.appendChild(likeIconWithColor);
        } else {
            iconDiv.appendChild(likeIconWithoutColor);
        }
        const dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('dropdown-menu');

        const dropDownIcon = document.createElement('i');
        dropDownIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
        dropDownIcon.style.padding = '15px';
        dropDownIcon.addEventListener('click', () => {
            dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
        });

        if (reply.user.name === user.name) {
            const editIcon = document.createElement('i');
            editIcon.classList.add('fa-regular', 'fa-pen-to-square');
            editIcon.style.padding = '15px';
            editIcon.addEventListener('click', () => {
                dropdownMenu.style.display = 'none';
                const currentContent = replyContent.innerHTML;
                const textarea = document.createElement('textarea');
                textarea.style.borderRadius = '10px';
                textarea.style.backgroundColor = 'lightgrey';
                textarea.value = currentContent;
                divEl.replaceChild(textarea, replyContent);
                const saveButton = document.createElement('button');
                saveButton.textContent = 'Save';
                saveButton.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'save-button');
                saveButton.addEventListener('click', async () => {
                    const updatedContent = textarea.value.trim();
                    if (updatedContent !== '') {
                        const replyId = reply.id;
                        await updateContentForReply(replyId, updatedContent);
                        replyContent.innerHTML = updatedContent;
                        divEl.removeChild(textarea);
                        replyElement.removeChild(saveButton);
                    } else {
                        alert('Please enter something for the reply.');
                    }
                });
                replyElement.appendChild(saveButton);
            });
            dropdownMenu.appendChild(editIcon);
            replyElement.appendChild(dropdownMenu);

            const trashIcon = document.createElement('i');
            trashIcon.classList.add('fa-solid', 'fa-trash');
            trashIcon.style.padding = '15px';
            trashIcon.addEventListener('click', async () => {
                dropdownMenu.style.display = 'none';
                const replyId = replyContent.id;
                console.log("Span Reply id", replyId);
                await deleteReply(replyId);
            });
            dropdownMenu.appendChild(trashIcon);
            replyElement.appendChild(dropdownMenu);
            replyElement.appendChild(dropDownIcon);
            replyElement.appendChild(iconDiv);
        }
    }
    console.log('Thi chin tal',replyElement)
    return replyElement;
};


const fetchAndDisplayReplies = async (id) => {
    const fetchReplies = await fetch(`/getAll-comment/${id}`);
    const fetchDataForReplies = await fetchReplies.json();

    const replies = [];

    for (const reply of fetchDataForReplies) {
        const user = await fetchUserDataByPostedUser(loginUser);
        const replyElement = document.createElement('div');

        const userRpImage = document.createElement('img');
        const photo = reply.user.photo || '/static/assets/img/default-logo.png';
        userRpImage.src = `${photo}`;
        userRpImage.alt = 'User Photo';
        userRpImage.classList.add('user-photo');
        userRpImage.style.height = '50px';
        userRpImage.style.width = '50px';
        userRpImage.style.marginLeft = '50px';
        userRpImage.style.backgroundColor = '#cccccc';
        replyElement.classList.add(`reply-item-${reply.id}`);
        let createdTimeForReply = await timeAgo(new Date(reply.localDateTime))
        replyElement.setAttribute('data-toggle', 'tooltip');
        replyElement.setAttribute('title', `${createdTimeForReply}`);
        const replySender = document.createElement('span');
        if (reply.user.name === user.name) {
            replySender.innerHTML = `You : `;
        } else {
            replySender.innerHTML = `${reply.user.name} : `;
        }
        const replyContent = document.createElement('span');
        replyContent.classList.add(`span-reply-container-${reply.id}`)
        replyContent.id = reply.id;
        const formattedContent = await highlightMentions(reply.content);
        replyContent.innerHTML =`${formattedContent}`;
        const spElement = document.createElement('span');
        const contentElement = document.createElement('span');
        const divEl = document.createElement('div');
        divEl.classList.add(`reply-container-div-${reply.id}`);
        divEl.style.marginLeft = '110px';
        divEl.style.padding = '20px';
        divEl.style.backgroundColor = 'lightgrey';
        divEl.style.marginTop = '-30px';
        divEl.style.borderTopLeftRadius = '10px';
        divEl.style.borderBottomLeftRadius = '30px';
        divEl.style.borderBottomRightRadius = '15px';
        spElement.appendChild(userRpImage);
        replyElement.appendChild(spElement);
        divEl.appendChild(replySender);
        divEl.appendChild(replyContent);
        contentElement.appendChild(divEl);
        replyElement.appendChild(contentElement);

        let replyInputForReply = replyElement.querySelector('.reply-input');
        let submitButton = replyElement.querySelector('.submit-reply-btn');
        let cancelButton = replyElement.querySelector('.cancel-reply-btn');
        const replyButton = document.createElement('i');
        replyButton.style.padding = '10px';
        replyButton.style.marginLeft = '300px';
        replyButton.classList.add('fa-solid', 'fa-reply');
        replyButton.addEventListener('click',async () => {
            const replyUser = await fetchRepliedUserForData(reply.id);
            const sanitizedUserName = replyUser.user.name.replace(/\s+/g, '');
            if (!replyInputForReply) {
                replyInputForReply = document.createElement('input');
                replyInputForReply.type = 'text';
                replyInputForReply.placeholder = 'Type your reply...';
                replyInputForReply.classList.add('reply-input');
                replyInputForReply.style.marginTop = '10px';
                replyInputForReply.style.borderRadius = '10px';
                replyInputForReply.value = `@${sanitizedUserName} : `;
                replyInputForReply.style.padding = '8px';
                replyInputForReply.readOnly = true;
                replyElement.appendChild(replyInputForReply);

                replyInputForReply.addEventListener('focus', function () {
                    replyInputForReply.removeAttribute('readOnly');
                    replyInputForReply.classList.remove('readonly');
                });
                replyInputForReply.addEventListener('blur', function () {
                    replyInputForReply.readOnly = true;
                    replyInputForReply.classList.add('readonly');
                });
            } else {
                replyInputForReply.value = `@${sanitizedUserName} `;
                replyInputForReply.readOnly = true;
                replyInputForReply.classList.add('readonly');
            }

            replyInputForReply.addEventListener('input', function () {
                if (replyInputForReply.value === `@${sanitizedUserName} `) {
                    replyInputForReply.classList.add('readonly');
                } else {
                    replyInputForReply.classList.remove('readonly');
                }
            });
            if (!submitButton) {
                submitButton = document.createElement('button');
                submitButton.style.marginTop = '10px';
                submitButton.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'submit-reply-btn');
                submitButton.textContent = 'Submit';
                submitButton.addEventListener('click', async () => {
                    const replyContent = replyInputForReply.value.trim();
                    if (replyContent !== '') {
                        const myObj = {
                            replyId: reply.id,
                            sender: loginUser,
                            content: replyContent
                        };
                        stompClient.send('/app/comment-reply-message', {}, JSON.stringify(myObj));
                        const chatArea = document.querySelector('#commentMessageText');
                        //  await displayMessage(user.name, replyContent, user.photo, id, reply.comment.post.id, chatArea);
                        console.log("kyi mal", user.name, replyContent, user.photo, id, reply.comment.post.id);
                        console.log(`Replying to comment ${id}: ${replyContent}`);
                        replyInputForReply.value = '';
                    } else {
                        alert('Please enter something that you want to reply.');
                    }
                });

                replyElement.appendChild(submitButton);
            }
            if (!cancelButton) {
                cancelButton = document.createElement('button');
                cancelButton.innerHTML = 'Cancel';
                cancelButton.style.marginTop = '10px';
                cancelButton.classList.add('btn', 'btn-outline-secondary', 'btn-sm', 'cancel-reply-btn');
                cancelButton.addEventListener('click', () => {
                    replyElement.removeChild(replyInputForReply);
                    replyElement.removeChild(submitButton);
                    replyElement.removeChild(cancelButton);
                });
                replyElement.appendChild(cancelButton);
            }
            replyInputForReply.focus();
        });
        replyElement.appendChild(replyButton);
        const likeIconWithoutColor = document.createElement('i');
        likeIconWithoutColor.classList.add('fa-regular', 'fa-thumbs-up');
        likeIconWithoutColor.style.fontSize = '20px';
        likeIconWithoutColor.addEventListener('click', () => {
            if (iconDiv.contains(dislikeIconWithColor)) {
                iconDiv.removeChild(dislikeIconWithColor);
            }
            iconDiv.appendChild(dislikeIconWithoutColor);
            iconDiv.removeChild(likeIconWithoutColor);
            iconDiv.appendChild(likeIconWithColor);
            const myObj = {
                postId: reply.id,
                commentId: id,
                sender: loginUser,
                content: ` like  your reply!`,
                type: 'LIKE',
            };

            stompClient.send('/app/like-replyReact-message', {}, JSON.stringify(myObj));
        });

        const likeIconWithColor = document.createElement('i');
        likeIconWithColor.style.fontSize = '20px';
        likeIconWithColor.classList.add('fa-solid', 'fa-thumbs-up');
        likeIconWithColor.addEventListener('click', () => {
            if (iconDiv.contains(dislikeIconWithColor)) {
                iconDiv.removeChild(dislikeIconWithColor);
            }
            iconDiv.appendChild(dislikeIconWithoutColor);
            iconDiv.removeChild(likeIconWithColor);
            iconDiv.appendChild(likeIconWithoutColor);
            const myObj = {
                postId: reply.id,
                commentId: id,
                sender: loginUser,
                content: ` liked  your reply!`,
                type: null,
            }
            stompClient.send('/app/like-replyReact-message', {}, JSON.stringify(myObj));
        });
        const dislikeIconWithoutColor = document.createElement('i');
        dislikeIconWithoutColor.classList.add('fa-regular', 'fa-thumbs-down');
        dislikeIconWithoutColor.style.fontSize = '20px';
        dislikeIconWithoutColor.style.padding = '10px';
        dislikeIconWithoutColor.addEventListener('click', () => {
            iconDiv.removeChild(dislikeIconWithoutColor);
            iconDiv.appendChild(dislikeIconWithColor);
            if (iconDiv.contains(likeIconWithColor)) {
                iconDiv.removeChild(likeIconWithColor);
            }
            iconDiv.appendChild(likeIconWithoutColor);
            const myObj = {
                postId: reply.id,
                commentId: id,
                sender: loginUser,
                content: ` dislike your reply!`,
                type: 'DISLIKE',
            }
            stompClient.send('/app/like-replyReact-message', {}, JSON.stringify(myObj));
        });
        const dislikeIconWithColor = document.createElement('i');
        dislikeIconWithColor.classList.add('fa-solid', 'fa-thumbs-down');
        dislikeIconWithColor.style.fontSize = '20px';
        dislikeIconWithColor.style.padding = '10px';
        dislikeIconWithColor.addEventListener('click', () => {
            iconDiv.removeChild(dislikeIconWithColor);
            iconDiv.appendChild(dislikeIconWithoutColor);
            if (iconDiv.contains(likeIconWithColor)) {
                iconDiv.removeChild(likeIconWithColor);
            }
            iconDiv.appendChild(likeIconWithoutColor);
            const myObj = {
                postId: reply.id,
                commentId: id,
                sender: loginUser,
                content: ` dislike your comment!`,
                type: null,
            }
            stompClient.send('/app/like-replyReact-message', {}, JSON.stringify(myObj));
        });

        const iconDiv = document.createElement('div');
        iconDiv.style.marginLeft = '360px';
        iconDiv.style.marginTop = '-40px';
        const isReact = await replyReactType(id, user.id, reply.id);
        if (isReact !== null && isReact.type === 'DISLIKE') {
            iconDiv.appendChild(dislikeIconWithColor);
        } else {
            iconDiv.appendChild(dislikeIconWithoutColor);
        }

        if (isReact !== null && isReact.type === 'LIKE') {
            iconDiv.appendChild(likeIconWithColor);
        } else {
            iconDiv.appendChild(likeIconWithoutColor);
        }
        const dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('dropdown-menu');

        const dropDownIcon = document.createElement('i');
        dropDownIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
        dropDownIcon.style.padding = '15px';
        dropDownIcon.addEventListener('click', () => {
            dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
        });

        if (reply.user.name === user.name) {
            const editIcon = document.createElement('i');
            editIcon.classList.add('fa-regular', 'fa-pen-to-square');
            editIcon.style.padding = '15px';
            editIcon.addEventListener('click', () => {
                dropdownMenu.style.display = 'none';
                const currentContent = replyContent.innerHTML;
                const textarea = document.createElement('textarea');
                textarea.style.borderRadius = '10px';
                textarea.style.backgroundColor = 'lightgrey';
                textarea.value = currentContent;
                divEl.replaceChild(textarea, replyContent);
                const saveButton = document.createElement('button');
                saveButton.textContent = 'Save';
                saveButton.classList.add('btn', 'btn-outline-primary', 'btn-sm', 'save-button');
                saveButton.addEventListener('click', async () => {
                    const updatedContent = textarea.value.trim();
                    if (updatedContent !== '') {
                        const replyId = reply.id;
                        await updateContentForReply(replyId, updatedContent);
                        replyContent.innerHTML = updatedContent;
                        divEl.removeChild(textarea);
                        replyElement.removeChild(saveButton);
                    } else {
                        alert('Please enter something for the reply.');
                    }
                });
                replyElement.appendChild(saveButton);
            });
            dropdownMenu.appendChild(editIcon);
            // replyElement.appendChild(dropdownMenu);

            const trashIcon = document.createElement('i');
            trashIcon.classList.add('fa-solid', 'fa-trash');
            trashIcon.style.padding = '15px';
            trashIcon.addEventListener('click', async () => {
                dropdownMenu.style.display = 'none';
                const replyId = replyContent.id;
                console.log("Span Reply id", replyId);
                await deleteReply(replyId);
            });
            dropdownMenu.appendChild(trashIcon);
            replyElement.appendChild(dropdownMenu);
            replyElement.appendChild(dropDownIcon);
        }
        replyElement.appendChild(iconDiv);

        replies.push(replyElement);
    }
    return replies;
};


 const replyReactType = async (commentId, userId, replyId) => {
     const fetchTypeForReply = await fetch(`/reply-type-react/${commentId}/${userId}/${replyId}`);
     const response = await fetchTypeForReply.json();
     return response;
 }

 const commentReactType = async (id, userId, postId) => {
     const fetchType = await fetch(`/comment-type-react/${id}/${userId}/${postId}`);
     const response = await fetchType.json();
     return response;
 }

 const deleteComment = async (id) => {
     const getData = await fetch(`/delete-comment/${id}`, {
         method: 'DELETE'
     });
     if (!getData.ok) {
         alert('Something wrong while deleting comment');
     }
     const data = await getData.json();
     const postId = data.postId;
     console.log('postId', postId);
     const commentCountSize = await fetchCommentSizes(postId);
     document.getElementById(`commentCountStaticBox-${postId}`).innerHTML = '';
     document.getElementById(`commentCountStaticBox-${postId}`).innerHTML = `comment ${commentCountSize}`;
     const userItem = document.querySelector(`.user-item-${id}`);
     if (!userItem) {
         console.error(`User item with id ${id} not found`);
         return;
     }
     userItem.remove();
     // await getAllComments(postId);
 };

 const deleteReply = async (id) => {
     const getData = await fetch(`/delete-reply/${id}`, {
         method: 'DELETE'
     });
     if (!getData.ok) {
         alert('Something wrong while deleting reply');
     }
     const data = await getData.json();
     const postId = data.postId;
     console.log('postId', postId);
     const commentCountSize = await fetchCommentSizes(postId);
     document.getElementById(`commentCountStaticBox-${postId}`).innerHTML = '';
     document.getElementById(`commentCountStaticBox-${postId}`).innerHTML = `comment ${commentCountSize}`;
     const replyItem = document.querySelector(`.reply-item-${id}`)
     if (!replyItem) {
         console.error(`User item with id ${id} not found`);
         return;
     }
     replyItem.remove();
     // await getAllComments(postId);
 };

 const updateContentForReply = async (id, content) => {
     const myObj = {
         id: id,
         content: content
     };
     const updatedData = await fetch(`/reply-update`, {
         method: 'PUT',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(myObj)
     });
     if (!updatedData.ok) {
         alert("Something wrong while updating reply");
     }
     const data = await updatedData.json();
     const postId = data.postId;
     console.log("Want to know postId", postId);
     const divEl = document.querySelector(`.reply-container-div-${id}`);
     const spElement = document.querySelector(`.span-reply-container-${id}`);
     if(spElement){
         divEl.removeChild(spElement);
     }
     const formattedContent = await highlightMentions(content);
     const newSpElement = document.createElement('span');
     newSpElement.id = id;
     newSpElement.classList.add(`span-reply-container-${id}`);
     newSpElement.innerHTML = `${formattedContent}`;
     divEl.appendChild(newSpElement);
     // await getAllComments(postId);
 };

 const updateContent = async (id, content) => {
     const myObj = {
         id: id,
         content: content
     };
     const upData = await fetch(`/comment-update`, {
         method: 'PUT',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(myObj)
     });
     if (!upData.ok) {
         alert('something went wrong while updating');
     }
     const data = await upData.json();
     const postId = data.postId;
     console.log("Want to know postId", postId)
     const cmtDiv = document.querySelector(`.comment-container-${id}`);
     const spanElement = document.querySelector(`.comment-span-container-${id}`);
     if (spanElement) {
         console.log("shi tal")
         cmtDiv.removeChild(spanElement);
     }
     const formattedContent = await highlightMentions(content);
     const newSpanElement = document.createElement('span');
     newSpanElement.id = id;
     newSpanElement.classList.add(`comment-span-container-${id}`);
     newSpanElement.innerHTML = `${formattedContent}`;
     cmtDiv.appendChild(newSpanElement);
     // await getAllComments(postId);
 };

 const receivedMessageForComment = async (payload) => {
     console.log('Message Received');
     const message = await JSON.parse(payload.body);
     // const user = await fetchUserDataByPostedUser(loginUser);
     // const postList = await fetchUserPostById(loginUser);
     // console.log("type",typeof postList);
     if (loginUser === message.staffId) {
         notificationCount = notificationCount + 1;
         await showNotiCount();
         console.log(message.photo, message.sender, message.content, message.postId);
         const msg = ' commented to your photo';
         message.photo = message.photo ||  '/static/assets/img/default-logo.png';
         await notifyMessageForReact(msg, message.sender, message.photo, null);
     }
     const commentCountSize = await fetchCommentSizes(message.postId);
     document.getElementById(`commentCountStaticBox-${message.postId}`).innerHTML = '';
     document.getElementById(`commentCountStaticBox-${message.postId}`).innerHTML = `comment ${commentCountSize}`;
     // await welcome();
     let mentionedUsers = extractMentionedUsersForComment(message.content);
     await sendMentionNotificationForComment(mentionedUsers,message.commentId);
     message.photo = message.photo ||  '/static/assets/img/default-logo.png';
     const chatArea = document.querySelector('#commentMessageText');
     const localDateTime = new Date().toLocaleString();
     await displayMessage(message.sender, message.content, message.photo, message.commentId, message.postId,localDateTime,chatArea);
 };

const receivedMessageForMention = async (payload) => {
    try {
        console.log('Message Received');
        const message = JSON.parse(payload.body);
        const user = await fetchUserDataByPostedUser(message.userId);
        const userIdList = message.users;
        if (userIdList.includes(loginUser)) {
            notificationCount += 1;
            await showNotiCount();
            const msg = 'mentioned you in a post';
            message.photo = user.photo ||  '/static/assets/img/default-logo.png';
            await notifyMessageForReact(msg, user.name, user.photo, null);
        }
    } catch (error) {
        console.error('Error processing mention message:', error);
    }
};

const sendMentionNotificationForComment = async (mentionedUsers, id) =>{
    if (mentionedUsers.length > 0) {
        console.log("get", mentionedUsers);
        const myObj = {
            postId: id,
            userId: loginUser,
            users: mentionedUsers,
        }
        stompClient.send('/app/mention-notification-forComment', {}, JSON.stringify(myObj));
    }
}

 const receivedMessageForCommentReply = async (payload) => {
     console.log('Message Received');
     const message = await JSON.parse(payload.body);
     console.log('staffid', message.staffId);
     if (loginUser === message.staffId) {
         notificationCount = notificationCount + 1;
         await showNotiCount();
         console.log(message.photo, message.sender, message.content, message.postId);
         const msg = ' replied to your comment';
         await notifyMessageForReact(msg, message.sender, message.photo, null);
     }
     // await welcome();
     const commentCountSize = await fetchCommentSizes(message.postId);
     document.getElementById(`commentCountStaticBox-${message.postId}`).innerHTML = '';
     document.getElementById(`commentCountStaticBox-${message.postId}`).innerHTML = `comment ${commentCountSize}`;
     console.log('Comment ide',message.commentId)
     if(message.commentId != null){
         console.log('haha')
         const reply = await fetchAndDisplayLastReply(message.commentId);
         console.log('wow mal ya pr lr')
         await document.querySelector(`.replies-container-${message.commentId}`).appendChild(reply);
     }
     // const chatArea = document.querySelector('#commentMessageText');
     // await displayMessage(message.sender, message.content, message.photo, message.commentId, message.postId, chatArea);
 };

 const pressedComment = async (id) => {
     console.log('comment', id);
     await getAllComments(id);
     await mentionPostForComment(id)
     document.getElementById('sendCommentButton').addEventListener('click', async () => {
         const cmtValue = document.getElementById('commentText').value;
         const myObj = {
             postId: id,
             sender: loginUser,
             content: cmtValue,
         };
         document.getElementById('commentForm').reset();
         //   const user = await fetchUserDataByPostedUser(loginUser);
         //   // console.log("ss",user.name);
         //   const commentCountSize = await fetchCommentSizes(id);
         // let  commentId = commentCountSize.length + 1;
         //    const postedUser = await fetchPostedUser(id);
         //    if(user.staffId === postedUser.staffId) {
         //        const chatArea = document.querySelector('#commentMessageText');
         //        await displayMessage(user.name, cmtValue, user.photo, commentId, id, chatArea);
         //    }
         stompClient.send('/app/comment-message', {}, JSON.stringify(myObj));
     });
 };

 const resetModalContent = () => {
     const sendCommentButton = document.getElementById('sendCommentButton');
     const newSendCommentButton = sendCommentButton.cloneNode(true);
     sendCommentButton.parentNode.replaceChild(newSendCommentButton, sendCommentButton);
     newSendCommentButton.addEventListener('click', () => {
         const cmtValue = document.getElementById('commentText').value;
         const myObj = {
             postId: id,
             sender: loginUser,
             content: cmtValue,
             date: new Date(),
         };
         document.getElementById('commentForm').reset();
         stompClient.send('/app/comment-message', {}, JSON.stringify(myObj));
     });
 };

 const commentModal = document.getElementById('commentStaticBox');
 commentModal.addEventListener('show.bs.modal', () => {
     console.log('Hello ya p hayy');
     resetModalContent();
 });

const fetchUserDataByPostedUser = async (id) => {
    const fetchUserData = await fetch(`/get-userData/${id}`);
    if (!fetchUserData.ok) {
        alert('Invalid user');
    }
    const userDataForAll = await fetchUserData.json();
    return userDataForAll;
};

const fetchUserPostById = async (id) => {
    const fetchUserDataForPost = await fetch(`/get-userPostsData/${id}`);
    if (!fetchUserDataForPost.ok) {
        alert('Invalid user');
    }
    const userDataPost = await fetchUserDataForPost.json();
    return userDataPost;
};

const fetchRepliedUserForData = async (id) => {
    const fetchDataForUser = await fetch(`/user/reply-user-data/${id}`);
    const userDataForReply = await fetchDataForUser.json();
    return userDataForReply;
};

let currentPage = '0';
let isFetching = false;
let hasMore = true;

const fetchNotificationPerPage = async () => {
    isFetching = true;
    let response = await fetch(`/user/get-all-noti/${currentPage}`, {
        method: 'GET'
    });
    let root = document.getElementById('root');
    root.innerHTML = '';

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let data = await response.json();
    isFetching = false;
    if (data.length === 0) {
        hasMore = false;
        return;
    }
    for (let noti of data) {
        let divElement = document.createElement('div');
        divElement.classList.add('notificationForNoti', `postId-${noti.postId}`);
        divElement.id = `noti-deleted-${noti.id}`;
        divElement.dataset.postId = noti.postId;
        divElement.style.borderRadius = '10px';
        divElement.style.width = '380px';
        attachNotificationEventListeners();
        console.log("GetIDFORMEnto",noti.mentionId)
        const trashIcon = document.createElement('i');
        trashIcon.id = `trashIcon-deleted-${noti.id}`
        trashIcon.classList.add('fa-solid','fa-trash-can');
        trashIcon.style.marginLeft = '400px';
        trashIcon.addEventListener('click',async () => {
            const notiID = noti.id;
            await deletedNotification(notiID);
        });
        const spEle = document.createElement('span');
        spEle.style.marginTop = '-40px';
        spEle.appendChild(trashIcon);
        if (noti.reactId && !noti.commentId && !noti.replyId) {
            const reactType = await fetchReactTypeForNotification(noti.reactId);
            console.log('React Type user', reactType.user.staffId)
            const user = await fetchUserDataByPostedUser(reactType.user.staffId);
            const photo = user.photo ||  '/static/assets/img/default-logo.png';
            let imgElement = document.createElement('img');
            imgElement.src = `${photo}`;
            imgElement.width = 40;
            imgElement.height = 40;
            imgElement.style.borderRadius = '50%';
            const pElement = document.createElement('p');
            let imgReactElement = document.createElement('img');
            if (reactType.type) {
                imgReactElement.src = `/static/assets/img/${reactType.type.toLowerCase()}.png`;
                imgReactElement.width = 20;
                imgReactElement.height = 20;

                imgElement.style.display = 'inline-block';
                imgReactElement.style.display = 'inline-block';
                imgReactElement.style.marginBottom = '-20px';
                imgReactElement.style.marginLeft = '-10px';
                pElement.style.display = 'inline-block';
                pElement.innerHTML = `${user.name}` + `${noti.content}`;
            } else {
                imgReactElement.src = `/static/assets/img/cancel.png`;
                imgReactElement.width = 20;
                imgReactElement.height = 20;

                imgElement.style.display = 'inline-block';
                imgReactElement.style.display = 'inline-block';
                imgReactElement.style.marginBottom = '-20px';
                imgReactElement.style.marginLeft = '-10px';
                pElement.style.display = 'inline-block';
                pElement.innerHTML = `${user.name}` + ` canceled reaction in your post`;
            }
            divElement.appendChild(imgElement);
            divElement.appendChild(imgReactElement);
            divElement.appendChild(pElement);
        }

        if (noti.commentId && !noti.replyId && !noti.reactId) {
            const commentUser = await fetchCommetedUser(noti.commentId);
            console.log('Comment user', commentUser.user.name)
            const photo = commentUser.user.photo ||  '/static/assets/img/default-logo.png';
            let imgElement = document.createElement('img');
            imgElement.src = `${photo}`;
            imgElement.width = 40;
            imgElement.height = 40;
            imgElement.style.borderRadius = '50%';

            const pElement = document.createElement('p');
            pElement.style.display = 'inline-block';
            pElement.style.marginLeft = '10px'; // Adjust margin as needed
            pElement.innerHTML = `${commentUser.user.name} commented to your post`;

            divElement.appendChild(imgElement);
            divElement.appendChild(pElement);
        }

        if (noti.commentId && noti.replyId && !noti.reactId) {
            const replyUser = await fetchRepliedUserForData(noti.replyId);
            console.log('photo', replyUser.user.photo);
            console.log('photo', replyUser.user.staffId);
            const photo = replyUser.user.photo ||  '/static/assets/img/default-logo.png';
            console.log('Reply user', replyUser.user.name);
            let imgElement = document.createElement('img');
            imgElement.src = `${photo}`;
            imgElement.width = 40;
            imgElement.height = 40;
            imgElement.style.borderRadius = '50%';

            const pElement = document.createElement('p');
            pElement.style.display = 'inline-block';
            pElement.style.marginLeft = '10px'; // Adjust margin as needed
            pElement.innerHTML = `${replyUser.user.name} replied to your comment`;

            divElement.appendChild(imgElement);
            divElement.appendChild(pElement);
        }


        if (noti.reactId && noti.commentId && !noti.replyId) {
            const reactType = await fetchReactTypeForNotification(noti.reactId);
            console.log('React Type user', reactType.user.staffId)
            const user = await fetchUserDataByPostedUser(reactType.user.staffId);
            const photo = user.photo ||  '/static/assets/img/default-logo.png';
            let imgElement = document.createElement('img');
            imgElement.src = `${photo}`;
            imgElement.width = 40;
            imgElement.height = 40;
            imgElement.style.borderRadius = '50%';
            const pElement = document.createElement('p');
            let imgReactElement = document.createElement('img');
            if (reactType.type) {
                imgReactElement.src = `/static/assets/img/${reactType.type.toLowerCase()}.png`;
                imgReactElement.width = 20;
                imgReactElement.height = 20;

                imgElement.style.display = 'inline-block';
                imgReactElement.style.display = 'inline-block';
                imgReactElement.style.marginBottom = '-20px';
                imgReactElement.style.marginLeft = '-10px';
                pElement.style.display = 'inline-block';
                pElement.innerHTML = `${user.name}` + `${reactType.type}` + ' your comment';
            } else {
                imgReactElement.src = `/static/assets/img/cancel.png`;
                imgReactElement.width = 20;
                imgReactElement.height = 20;

                imgElement.style.display = 'inline-block';
                imgReactElement.style.display = 'inline-block';
                imgReactElement.style.marginBottom = '-20px';
                imgReactElement.style.marginLeft = '-10px';
                pElement.style.display = 'inline-block';
                pElement.innerHTML = `${user.name}` + ` canceled reaction in` + ' your comment';
            }
            divElement.appendChild(imgElement);
            divElement.appendChild(imgReactElement);
            divElement.appendChild(pElement);
        }

        if (noti.reactId && !noti.commentId && noti.replyId) {
            const reactType = await fetchReactTypeForNotification(noti.reactId);
            console.log('React Type user', reactType.user.staffId)
            const user = await fetchUserDataByPostedUser(reactType.user.staffId);
            const photo = user.photo ||  '/static/assets/img/default-logo.png';
            let imgElement = document.createElement('img');
            imgElement.src = `${photo}`;
            imgElement.width = 40;
            imgElement.height = 40;
            imgElement.style.borderRadius = '50%';
            const pElement = document.createElement('p');
            let imgReactElement = document.createElement('img');
            if (reactType.type) {
                imgReactElement.src = `/static/assets/img/${reactType.type.toLowerCase()}.png`;
                imgReactElement.width = 20;
                imgReactElement.height = 20;

                imgElement.style.display = 'inline-block';
                imgReactElement.style.display = 'inline-block';
                imgReactElement.style.marginBottom = '-20px';
                imgReactElement.style.marginLeft = '-10px';
                pElement.style.display = 'inline-block';
                pElement.innerHTML = `${user.name}` + `${reactType.type}` + ' your reply';
            } else {
                imgReactElement.src = `/static/assets/img/cancel.png`;
                imgReactElement.width = 20;
                imgReactElement.height = 20;

                imgElement.style.display = 'inline-block';
                imgReactElement.style.display = 'inline-block';
                imgReactElement.style.marginBottom = '-20px';
                imgReactElement.style.marginLeft = '-10px';
                pElement.style.display = 'inline-block';
                pElement.innerHTML = `${user.name}` + ` canceled reaction in ` + ' your reply';
            }
            divElement.appendChild(imgElement);
            divElement.appendChild(imgReactElement);
            divElement.appendChild(pElement);
        }

        if (noti.mentionId) {
            const mention = await getMentionById(noti.mentionId);
            console.log("SDFDSF555"+mention.postedUserId)
            console.log("SDFDSF555"+mention.post.id)
            if(!mention.comment) {
                const getUser = await getMentionUser(mention.postedUserId);
                const photo = getUser.photo ||  '/static/assets/img/default-logo.png';
                console.log("MenitonUSer", getUser.name)
                let imgElement = document.createElement('img');
                imgElement.src = `${photo}`;
                imgElement.width = 40;
                imgElement.height = 40;
                imgElement.style.borderRadius = '50%';

                const pElement = document.createElement('p');
                pElement.style.display = 'inline-block';
                pElement.style.marginLeft = '10px'; // Adjust margin as needed
                pElement.innerHTML = `${getUser.name} mentioned you in a post`;

                divElement.appendChild(imgElement);
                divElement.appendChild(pElement);
            }else{
                const getUser = await getMentionUser(mention.postedUserId);
                const photo = getUser.photo ||  '/static/assets/img/default-logo.png';
                console.log("MenitonUSer", getUser.name)
                let imgElement = document.createElement('img');
                imgElement.src = `${photo}`;
                imgElement.width = 40;
                imgElement.height = 40;
                imgElement.style.borderRadius = '50%';

                const pElement = document.createElement('p');
                pElement.style.display = 'inline-block';
                pElement.style.marginLeft = '10px'; // Adjust margin as needed
                pElement.innerHTML = `${getUser.name} mentioned you in a comment`;

                divElement.appendChild(imgElement);
                divElement.appendChild(pElement);
            }
        }
        const container =  document.createElement('div');
        container.classList.add('container-trash-div')
        container.style.display = 'inline-grid';
        container.appendChild(divElement);
        container.appendChild(spEle);
        root.appendChild(container);
    }
};

const getMentionUser = async (id) => {
    const data = await fetch(`/getData-mention/${id}`);
    const res = await data.json();
    return res;
}

const getMentionById = async (id) => {
    const data = await fetch(`/get-mentionUser/${id}`);
    const res = await data.json();
    return res;
}

const deleteAllNotifications =async  () => {
    const deleteAllNoti = await fetch(`/delete-all-noti`,{
        method:'DELETE'
    });
    if(!deleteAllNoti.ok){
        alert('something wrong please try again later');
    }else {
        const divElement = document.getElementById(`root`);
        if (divElement) {
            divElement.remove();
        }
    }
}

const deletedNotification = async (id) =>{
    const deleteNoti = await fetch(`/delete-noti/${id}`,{
        method:'DELETE'
    });
    if(!deleteNoti.ok){
        alert('something wrong please try again later');
    }else {
        const divElement = document.getElementById(`noti-deleted-${id}`);
        const trashIconEl = document.getElementById(`trashIcon-deleted-${id}`);
        if (divElement && trashIconEl ) {
            console.log("it's fine",id)
            divElement.remove();
            trashIconEl.remove();
        }
    }
}

const attachNotificationEventListeners = () => {
    const notificationElements = document.querySelectorAll('.notificationForNoti');
    notificationElements.forEach(notificationElement => {
        notificationElement.addEventListener('click', async function() {
            console.log("Clicked on notification element");
            const postId = this.dataset.postId; // 'this' refers to the current notification element
            console.log('PostId', postId);
            const postElement = document.getElementById(postId);
            if (postElement) {
                postElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', async () => {
    // await fetchNotificationPerPage();
    const modalContent = document.getElementById('content-notification');
    modalContent.addEventListener('scroll', async () => {
        if (isFetching || !hasMore) {
            console.log('currentPage', currentPage);
            return;
        }

        if (modalContent.scrollTop + modalContent.clientHeight >= modalContent.scrollHeight) {
            currentPage++;
            console.log('currentPage', currentPage);
            await fetchNotificationPerPage();
        }
    });
});

// const receivedMessageForComment = async (payload) => {
//     console.log('Message Received')
//     const message = await JSON.parse(payload.body);
//     message.photo = message.photo || 'path/to/default/photo'; // add this line
//     const chatArea = document.querySelector('#commentMessageText');
//     displayMessage(message.sender, message.content, message.photo, chatArea);
// };

async function goToSearchPage(){
    window.location.href = '/searcher'
}


async function searchMethodWork(){
    let input = await document.getElementById('searchInput').value
    if(window.location.pathname === '/index'){
        localStorage.setItem('searchInput','')
        window.location.href = '/searcher'
        document.getElementById('searchInput').value = localStorage.getItem('searchInput')
        await createPostsForSearch()
    }
    console.log(input)
    localStorage.setItem('searchInput',document.getElementById('searchInput').value)
    document.getElementById('searchInput').value = localStorage.getItem('searchInput')
    await createPostsForSearch()
}

 
 
async function dateFormatter(startDate){
    let startDay = startDate.getDate()
    let startMonth = startDate.getMonth()+1
    let startYear = startDate.getFullYear()
    let startHours = startDate.getHours()
    let startMinutes = startDate.getMinutes()
    let formattedStartDate = `${startDay}/${startMonth}/${startYear} ${startHours}:${startMinutes}`;
    return new Promise((resolve) => {
        resolve(formattedStartDate);
    });
}

 



async function getEventDetail(id){
    let data = await fetch('/event/getEventById/'+id,{
        method : 'GET'
    })
    let response = await data.json()
    let startDate = new Date(response.start_date)
    let startDay = startDate.getDate()
    let startMonth = startDate.getMonth()+1
    let startYear = startDate.getFullYear()
    let startHours = startDate.getHours()
    let startMinutes = startDate.getMinutes()
    let formattedStartDate = `${startDay} : ${startMonth} : ${startYear} `;
    let endDate = new Date(response.end_date)
    let endDay = endDate.getDate()
    let endMonth = endDate.getMonth()+1
    let endYear = endDate.getFullYear()
    let endHours = endDate.getHours()
    let endMinutes = endDate.getMinutes()
    let formattedEndDate = `${endDay} : ${endMonth} : ${endYear} `
    console.log(response)
    let eventEditModal = document.getElementById('eventEditModal')
    let row = ''
    row += `
    <div> 
    <label for="updateEventId"></label>
    <input type="hidden" value="${response.id}" name="updateEventId" id="updateEventId">

    <label for="updateEventTitle" class="font-monospace m-2" >Title <i class="fa-solid fa-sign-hanging"></i></label>
    <input type="text"  style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);" class="form-control font-monospace m-2" value="${response.title}" id="updateEventTitle" name="updateEventTitle">

    <label for="updateEventDescription" class="font-monospace m-2"  >Description</label>
    <textarea type="text" style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);" class="form-control font-monospace m-2" id="updateEventDescription" name="updateEventDescription">${response.description}</textarea>

    <b class="form-control font-monospace m-2" style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);">${formattedStartDate}</b>
    <label for="updateEventStartDate" class="font-monospace m-2" >Start <i class="fa-regular fa-clock"></i></label>
    <input style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);" class="form-control font-monospace m-2" type="date" id="updateEventStartDate" name="updateEventStartDate" value=''>
    
    <b class="form-control font-monospace m-2" style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);">${formattedEndDate}</b>
    <label for="updateEventEndDate" class="font-monospace m-2"  >End <i class="fa-solid fa-clock"></i></label>
    <input style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);" class="form-control font-monospace m-2" type="date" id="updateEventEndDate" name="updateEventEndDate" value=''>

    <label for="updateEventLocation" class="font-monospace m-2"  >Location <i class="fa-regular fa-compass"></i></label>
    <input style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);" class="form-control font-monospace m-2" type="text" id="updateEventLocation" value="${response.location}">

    <label for="updateEventPhoto" id="labelForEventUpdatePhoto"  class="font-monospace m-2" >Photo <i class="fa-solid fa-camera"></i></label>
    <input class="form-control" style="display:none;" type="file" id="updateEventPhoto" name="updateEventPhoto">
    <div class="d-flex"> 
    <img  class="from-control" src="${response.photo}" style="width:100px; height;100px; border-radius:20px;" id="${response.id}-event-edit-url">

    <button  style="border-radius:10px;" id="restoreBtn" class="btn btn-success hidden font-monospace m-2" onclick="restoreEventPhoto(${response.id})">Restore</button>

    <button style="border-radius:10px;" class="btn btn-danger font-monospace m-2" id="photoRemoveBtn" onclick="deleteEditEventPhoto(${response.id})">Delete</button> 
    </div>
    </div> 
    <button type="button" style="margin-left: 200px; border-radius: 10px;" onclick="getEventUpdateData()" data-bs-dismiss="offcanvas" class="btn btn-primary font-monospace m-2" data-bs-target="#loadingModalBox" >Update</button>
</div>
    `
    eventEditModal.innerHTML = row
}

async function deleteEditEventPhoto(id){
    document.getElementById(id+'-event-edit-url').src =document.getElementById(id+'-event-edit-url').src+ 'deleted'
    document.getElementById('updateEventPhoto').type = 'hidden'
    document.getElementById('restoreBtn').classList.remove('hidden')
    document.getElementById('photoRemoveBtn').classList.add('hidden')
}

async function deleteEditPollEventPhoto(id){
    document.getElementById(id+'-event-edit-url').src =document.getElementById(id+'-poll-event-edit-url').src+ 'deleted'
    document.getElementById('updatePollEventPhoto').type = 'hidden'
    document.getElementById('restoreBtn').classList.remove('hidden')
    document.getElementById('photoRemoveBtn').classList.add('hidden')
}

async function restoreEventPhoto(id){
    let src = document.getElementById(id+'-event-edit-url').src
    console.log(src)
    let li = src.lastIndexOf('deleted')
    let result = src.substring(0,li)
    console.log(result)
    document.getElementById(id+'-event-edit-url').src = result
    console.log(document.getElementById(id+'-event-edit-url').src)
    document.getElementById('photoRemoveBtn').classList.remove('hidden')
    document.getElementById('restoreBtn').classList.add('hidden')
    document.getElementById('updateEventPhoto').type = 'file'
}

async function restorePollPhoto(id){
    let src = document.getElementById(id+'-poll-event-edit-url').src
    console.log(src)
    let li = src.lastIndexOf('deleted')
    let result = src.substring(0,li)
    console.log(result)
    document.getElementById(id+'-poll-event-edit-url').src = result
    console.log(document.getElementById(id+'-poll-event-edit-url').src)
    document.getElementById('photoRemoveBtn').classList.remove('hidden')
    document.getElementById('restoreBtn').classList.add('hidden')
    document.getElementById('updatePollEventPhoto').type = 'file'
}

async function getEventUpdateData(){
    loadingModalBox.show()
    let eventId = document.getElementById('updateEventId').value
    let eventTitle = document.getElementById('updateEventTitle').value
    let updateEventDescription = document.getElementById('updateEventDescription').value
    let start = document.getElementById('updateEventStartDate').value
    let end = document.getElementById('updateEventEndDate').value
    let location = document.getElementById('updateEventLocation').value
    let oldPhoto = document.getElementById(eventId+'-event-edit-url').src
    let newPhoto = document.getElementById('updateEventPhoto').files
    console.log(eventId)
    console.log(eventTitle)
    console.log(updateEventDescription)
    console.log(start)
    console.log(end)
    console.log(location)
    console.log(oldPhoto)
    console.log(newPhoto)

    let data = await fetch('/event/getEventById/'+eventId,{
        method : 'GET'
    })
    let response = await data.json()
    console.log(response)
    let startDate = new Date(response.start_date)
    let startDay = String(startDate.getDate()).padStart(2, '0')
    let startMonth = String(startDate.getMonth()+1).padStart(2, '0')
    let startYear = startDate.getFullYear()
    let startHours = startDate.getHours()
    let startMinutes = startDate.getMinutes()
    let formattedStartDate = `${startYear}-${startMonth}-${startDay}`;
    let endDate = new Date(response.end_date)
    let endDay = String(endDate.getDate()).padStart(2, '0')
    let endMonth = String(endDate.getMonth()+1).padStart(2, '0')
    let endYear = endDate.getFullYear()
    let endHours = endDate.getHours()
    let endMinutes = endDate.getMinutes()
    let formattedEndDate = ` ${endYear}-${endMonth}-${endDay}`

    if(newPhoto === ''){
        console.log('new photo is empty')
        newPhoto = null
    }
    if(start === ''){
        console.log('new statt is empty')
        start = 'old'
    }
    if(end === ''){
        console.log('new end is empty')
        end = 'old'
    }

    let updateEvent = {
        eventId : eventId,
        title : eventTitle,
        start_date : start,
        end_date : end,
        description : updateEventDescription,
        location : location,
        photo : oldPhoto,
        newPhoto :newPhoto
    }
    let formData = new FormData()
    formData.append('eventId',eventId)
    formData.append('title',eventTitle)
    formData.append('startDate',start)
    formData.append('endDate',end)
    formData.append('description',updateEventDescription)
    formData.append('location',location)
    formData.append('photo',oldPhoto)
    if(newPhoto !== null){
        formData.append('newPhoto',newPhoto[0])
    }
    if(newPhoto === null){
        formData.append('newPhoto',null)
    }

    console.log(Object.fromEntries(formData.entries()))
    console.log(updateEvent)
    console.log(JSON.stringify(updateEvent))
    let send = await fetch('/event/eventUpdate',{
        method : 'POST',
        body : formData
    })
    let r = await send.json()
  if(r){
    await removeCat()
      const eventContent = document.getElementById(`event-update-section-${r.id}`);
      const eventPostContent = document.querySelector(`.post-content-${r.id}`);
      if(eventPostContent){
        console.log('removed successfully')
          eventPostContent.remove();
      }
      eventContent.innerHTML = `<div class=" post-content-${r.id}" data-bs-toggle="modal" data-bs-target="#searchPost" >
                        <div class="card" style="width: 30rem;  margin-left:12px ;">
                            <div class="card-body">
                                <h5 class="card-title">${r.title}</h5>
                                <div class="d-flex align-items-start">
                                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button class="nav-link active  " id="v-${r.id}-photo-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-photo" type="button" role="tab" aria-controls="v-${r.id}-photo" aria-selected="true"><i class="fa-solid fa-image"></i>  </button>
                                        <button class="nav-link  " id="v-${r.id}-about-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-about" type="button" role="tab" aria-controls="v-${r.id}-about" aria-selected="false"><i class="fa-solid fa-circle-info"></i>  </button>
                                        <button class="nav-link" id="v-${r.id}-location-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-location" type="button" role="tab" aria-controls="v-${r.id}-location" aria-selected="false"><i class="fa-solid fa-location-dot"></i> </button>
                                        <button class="nav-link" id="v-${r.id}-date-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-date" type="button" role="tab" aria-controls="v-${r.id}-date" aria-selected="false"><i class="fa-solid fa-clock"></i></button>
                                    </div>
                                    <div class="tab-content" id="v-${r.id}-tabContent">
                                        <div class="tab-pane fade" id="v-${r.id}-about" role="tabpanel" aria-labelledby="v-${r.id}-about-tab">
                                            <div class="text-center lh-sm font-monospace">
                                                ${r.description}
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-${r.id}-location" role="tabpanel" aria-labelledby="v-${r.id}-location-tab">
                                            <div class="text-center fs-5 fw-bold fst-italic font-monospace ml-3">
                                                <div class="ml-5  mt-5 text-danger">${r.location}</div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-${r.id}-date" role="tabpanel" aria-labelledby="v-${r.id}-date-tab">
                                            <div class="text-center fs-6 fw-bold mt-3  pl-2 font-monospace">
                                                <div class="mt-2 ml-5 d-flex"><div class="text-secondary"> START </div> <i class="fa-solid fa-play text-danger mx-1"></i></br></div><div class="fst-italic"> ${formattedStartDate}</div></br>
                                                <div class="mt-2 ml-5 d-flex"><div class="text-secondary"> END </div> <i class="fa-solid fa-play text-danger mx-1"></i><br></div><div class="fst-italic"> ${formattedEndDate}</div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade show active" id="v-${r.id}-photo" role="tabpanel" aria-labelledby="v-${r.id}-photo-tab"><b class="p-2"><img src="${r.photo}" style="width:250px; height:200px; border-radius:20px"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
  }
}




async function deleteEvent(id){
    loadingModalBox.show()
    let data = await fetch('/event/deleteAEvent/'+id,{
        method : 'DELETE'
    })
    let result = data.json()
    console.log(result)
    if(result){
        await removeCat()
        const eventDiv = document.getElementById(`delete-event-section-${id}`);
        if(eventDiv){
            eventDiv.remove();
        }
        const pollDiv = document.getElementById(`pollPostDiv-${id}`);
        if(pollDiv){
            pollDiv.remove();
        }
    }
}



async function createAVoteOption(){
    let vote = document.getElementById('voteOptionInput').value
    console.log(vote)
    if(vote !== ''){
        let div = document.createElement('div')
        let btn = document.createElement('button')
        let li = document.createElement('li')
        div.style.display = 'flex'
        btn.classList.add('erase-btn')
        btn.textContent = 'X'
        li.classList.add('voteOption')
        let ul = document.getElementById('ulTag')
        li.textContent = vote
        div.appendChild(li)
        div.appendChild(btn)
        ul.appendChild(div)
        if(li){
            document.getElementById('voteOptionInput').value = ''
            btn.addEventListener('click', function() {
                // Remove the corresponding vote option when the button is clicked
                div.remove();
            });
        }
    }


}
async function createAVoteOptionForUpdate(){
    let vote = document.getElementById('voteOptionInputForUpdate').value
    console.log(vote)
    if(vote !== ''){
        let div = document.createElement('div')
        let btn = document.createElement('button')
        let li = document.createElement('li')
        div.style.display = 'flex'
        btn.classList.add('erase-btn')
        btn.textContent = 'X'
        li.classList.add('voteOptionForUpdate')
        let ul = document.getElementById('ulTagForUpdate')
        li.textContent = vote
        div.appendChild(li)
        div.appendChild(btn)
        ul.appendChild(div)
        if(li){
            document.getElementById('voteOptionInputForUpdate').value = ''
            btn.addEventListener('click', function() {
                // Remove the corresponding vote option when the button is clicked
                div.remove();
            });
        }
    }


}

async function createAPollPost(){
    loadingModalBox.show()
    if(validationFails()){
        alert('start date , end date , vote option of two and title is at least require')
    }else{
        let arr = []
        let values = document.querySelectorAll('.voteOption')
        values.forEach(v=>{
            arr.push(v.textContent.trim())
        })
        let data = new FormData(document.getElementById('pollForm'))
        let obj = Object.fromEntries(data.entries())
        console.log(obj)
        console.log(arr)
        data.append('opts',arr)
        data.append('multipartFile',document.getElementById('pollMultipartFile').files[0])
        console.log(data)
        let datas = await fetch('/event/createAVotePost',{
            method : 'POST',
            body : data
        })
        let response = await datas.json()
        console.log(document.getElementById('pollForm'))
        console.log(response)
        if(response){
            console.log('here')
            document.getElementById('pollForm').reset() 
            document.getElementById('ulTag').innerHTML = ''
            await removeCat()
        }
    }
}

// Add an event listener to the modal
 
 



// Function to check if validation fails
function validationFails() {
    // Add your validation logic here
    let start_date = document.getElementById('poll_start_date').value;
    let end_date = document.getElementById('poll_end_date').value;
    let title = document.getElementById('pollTitle').value;
    let arr = [];
    let values = document.querySelectorAll('.voteOption');
    values.forEach(v=>{
        arr.push(v.textContent.trim());
    });

    return (start_date === '' || end_date === '' || title === '' || arr.length < 2 ||start_date>end_date);
}

async function timeAgo(createdDate) {
    const now = new Date();
    const diff = now - createdDate;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `just now`;
    } else if (minutes < 60) {
      return `${minutes} minute${minutes > 1? '' : ''} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours > 1? '' : ''} ago`;
    } else {
      return `${days} day${days > 1? '' : ''} ago`;
    }
  }

// async function getAllPollPost(){
//     isFetchingForPoll = true
//     let polls = document.getElementById('polls');
//     let pollTab = document.getElementById('polls')

//     let data = await fetch(`/event/getPollsForNewsfeed/${currentPageForPoll}`,{
//         method : 'GET'
//     })
//     let response = await data.json()
//     isFetchingForPoll = false
//     if(response.length===0){
//         hasMoreForPoll = false
//         displayNoPostMessage()
//     }else{
//     console.log(response)
//     let rows = ''
//     for (let r of response) {
//         let expired = ''
//         if(new Date()>new Date(r.end_date)){
//             expired=`
            
// <div class="alert alert-danger d-flex align-items-center" style=" width:265px; position: absolute; top: 55px; left:120px;  z-index: 1;" role="alert">
// <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
// <div>
// <i class="fa-solid fa-triangle-exclamation"></i>
// POLL IS EXPIRED
// </div>
// </div>
            
//             `
//         }
//         let hidden = await checkVoted(r.id) === false ? '' : 'hidden'
//         let notHidden = await checkVoted(r.id) === false ? 'hidden' : ''
//         let row = ''
//         let created = new Date(r.created_date)
//         let now = new Date()
//         let createdTime = await timeAgo(new Date(r.created_date))
        
//         row += `
//         <div class="post" id="pollPostDiv-${r.id}">
//         <div class="post-top">
//             <div class="dp">
//                 <img src="${r.user.photo}" alt="">
//             </div>
//             <div class="post-info">
//                 <p class="name">${r.user.name}</p>
//                 <span class="time">${createdTime}</span>
//             </div>
//                         <div class="dropdown offset-8">
//       <a class=" dropdown-toggle" onclick="getPollEventDetail(${r.id})" href="#"   id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
//             <i class="fas fa-ellipsis-h "></i>
//             </a>
    
//       <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//         <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#pollEventEditModalBox">Edit</a></li>
//         <li><a class="dropdown-item" onclick="deleteEvent(${r.id})">Delete Post</a></li>
//       </ul>
//     </div>
//         </div>
//         <nav>
//         <div class="nav nav-tabs" id="nav-tab" role="tablist">
//           <button class="nav-link active" id="nav-about-tab-${r.id}" data-bs-toggle="tab" data-bs-target="#nav-about-${r.id}" type="button" role="tab" aria-controls="nav-about-${r.id}" aria-selected="true"> <i class="fa-solid fa-info"></i>  About</button>
//           <button class="nav-link" id="nav-vote-tab-${r.id}" data-bs-toggle="tab" data-bs-target="#nav-vote-${r.id}" type="button" role="tab" aria-controls="nav-vote-${r.id}" aria-selected="false"> <i class="fa-solid fa-check-to-slot"></i> Vote</button>
//         </div>
//       </nav>
//         <div class=" post-content" data-bs-toggle="modal"  >


//         <div class="card mb-3" style="max-width: 540px;">
//         <div class="row g-0">
//           <div class="col-md-4">
//             ${expired}
//             <img src="${r.photo}" style="max-width:170px; postion:relative;" class="img-fluid rounded-start" alt="...">
//           </div>
//           <div class="col-md-8">
//             <div class="card-body" style="max-height: 200px; overflow-y: auto;">
//             <div class="tab-content" id="nav-tabContent">
//   <div class="tab-pane fade show active" id="nav-about-${r.id}" role="tabpanel" aria-labelledby="nav-about-tab-${r.id}">
  
//   <h5 class="card-title align-middle font-monospace">${r.title}</h5>
//   <p class="card-text font-monospace">${r.description}</p>
  
//   </div>
//   <div class="tab-pane fade" id="nav-vote-${r.id}" role="tabpanel" aria-labelledby="nav-vote-tab-${r.id}">

            
//             `
//         let totalVotes = 0;
//         for (let v of r.voteOptions) {
//             let count = await getCount(v.id);
//             totalVotes += count;
//         }
//         for (let v of r.voteOptions) {
//             let count = await getCount(v.id);
//             let percentage = totalVotes === 0 ? 0 : (count / totalVotes) * 100;
//             row += `
//         <div class="vote-option d-flex mt-1">
//         <div class="d-block">
//         <div class="font-monospace ">${v.type}</div>
//                 <div class="d-flex">
//                 <div class="progress" style="height: 16px; width: 170px;">
                
//                     <div class="progress-bar bg-primary" id="${v.id}-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">${Math.floor(percentage)}%</div>
//                 </div>`
//                 if(new Date()<new Date(r.end_date)){
//             row += ` <button id="vote-btn-${r.id}" class="${hidden} give-btn" onclick="voteVoteOption(${v.id},${r.id})"><i class="fa-solid fa-hand" style="width:7px; margin-right:11px;"></i></button> `;
//                 }
//             let yes = await checkVotedMark(v.id)
//             let markIcon = 'hidden'
//             if(yes === true){
//                 markIcon = ''
//             }
//             console.log(yes)


//             row += `<div id="mark-id-${v.id}" class="${markIcon}"><i class="fa-regular fa-circle-check"></i></div>
//                 </div>
//                 </div>
//                  `



//             row+=`</div>`

//         }
//         if(new Date()<new Date(r.end_date)){
//         row += `   <button id="unvote-btn-${r.id}" class="${notHidden} erase-btn" onclick = "unVote(${r.id})"><i class="fa-solid fa-eraser"></i></button> `
//         }
//         row+=`</div>
//     </div>
//           </div>
//     </div>
//   </div>
// </div>
         
//         <div class="post-bottom">
//             <div class="action" style="height: 50px">
//     <div class="button_wrapper">
//           <div class="all_likes_wrapper">
//               <div data-title="LIKE">
//                   <img src="/static/assets/img/like.png" alt="Like" />
//               </div>
//               <div data-title="LOVE">
//                   <img src="/static/assets/img/love.png" alt="Love" />
//               </div>
//               <div data-title="CARE">
//                   <img src="/static/assets/img/care.png" alt="Care" />
//               </div>
//               <div data-title="HAHA">
//                   <img src="/static/assets/img/haha.png" alt="Haha" />
//               </div>
//               <div data-title="WOW">
//                   <img src="/static/assets/img/wow.png" alt="Wow" />
//               </div>
//               <div data-title="SAD">
//                   <img src="/static/assets/img/sad.png" alt="Sad" />
//               </div>
//               <div data-title="ANGRY">
//                   <img src="/static/assets/img/angry.png" alt="Angry" />
//               </div>
//           </div>
//           <button class="like_button" id=" ">
//           </button>
//       </div>
//             </div>
//             <div class="action">
//                 <i class="fa-regular fa-comment"></i>
//                 <span onclick="pressedComment()"  data-bs-toggle="modal" data-bs-target="#commentStaticBox">Comment  </span>
//             </div>
//             <div class="action">
//                 <i class="fa fa-share"></i>
//                 <span>Share</span>
//             </div>
//         </div>
//     </div>
//     </div>
//         `
//         rows+=row



//     }
//     let range = document.createRange();
//     let fragment = range.createContextualFragment(rows);
//     while (polls.children.length > 0) {
//         polls.children[0].remove();
//     }
//     pollTab.appendChild(fragment)
//     if(fragment){
//         for(let r of response){
//             await updateVotePercentage(r.voteOptions)
//         }
//     }
// }

// }


async function checkVotedMark(voteOptionId){
    let data = await fetch('/event/checkVotedMark/'+voteOptionId,{
        method : 'GET'
    })
    let response = await data.json()
    console.log(response)
    return response
}

async function updateVotePercentage(vo){
    console.log('vote here here')
    let totalVotes = 0;
    for (let v of vo) {
        let count = await getCount(v.id);
        totalVotes += count;
    }
    for(let v of vo){
        let bar = document.getElementById(v.id+'-bar')
        let count = await getCount(v.id)
        let percentage = totalVotes === 0 ? 0 : (count / totalVotes) * 100;
        bar.style.transition = 'width 1s ease-in-out';
        bar.style.width = percentage + '%';
        document.getElementById(v.id+'-bar').textContent = Math.floor(percentage)+"%"
        if(await checkVotedMark(v.id) === true){
            document.getElementById('mark-id-'+v.id).classList.remove('hidden')
        }else{
            document.getElementById('mark-id-'+v.id).classList.add('hidden')
        }
    }
}

async function voteVoteOption(voteOptionId,eventId){
    console.log(voteOptionId,eventId)
    let data = await fetch('/event/giveVote/'+voteOptionId+'/'+eventId,{
        method : 'GET'
    })
    let response = await data.json()
    console.log(response)
    if(response){
        let data = await fetch('/event/getAllPollPost',{
            method : 'GET'
        })
        let response = await data.json()
        console.log(response)
        response.forEach(r=>{
            updateVotePercentage(r.voteOptions)
            document.querySelectorAll('#vote-btn-'+eventId).forEach(element => {
                element.classList.add('hidden');
            })
            document.querySelectorAll('#unvote-btn-'+eventId).forEach(element => {
                element.classList.remove('hidden');
            })
        })
    }
}

async function getCount(voteOptionId){
    let data = await fetch('/event/getCount/'+voteOptionId,{
        method : 'GET'
    })
    let response = await data.json()
    console.log(response)
    return response
}

async function checkVoted(eventId){
    let data = await fetch('/event/checkVoted/'+eventId,{
        method : 'GET'
    })
    let response = await data.json()
    console.log(response)
    return response
}

async function unVote(eventId){
    let data = await fetch('/event/deleteAPoll/'+eventId,{
        method : 'GET'
    })
    let response = await data.json()
    console.log(response)
    if(response){
        let data = await fetch('/event/getAllPollPost',{
            method : 'GET'
        })
        let response = await data.json()
        response.forEach(r=>{
            updateVotePercentage(r.voteOptions)
            document.querySelectorAll('#vote-btn-'+eventId).forEach(element => {
                element.classList.add('hidden');
            })
            document.querySelectorAll('#vote-btn-'+eventId).forEach(element => {
                element.classList.remove('hidden');
            })
            document.querySelectorAll('#unvote-btn-'+eventId).forEach(element => {
                element.classList.add('hidden');
            })
        })
    }
}


async function getPollEventDetail(id){
    let data = await fetch('/event/getEventById/'+id,{
        method : 'GET'
    })
    let response = await data.json()
    let startDate = new Date(response.start_date)
    let startDay = startDate.getDate()
    let startMonth = startDate.getMonth()+1
    let startYear = startDate.getFullYear()
    let startHours = startDate.getHours()
    let startMinutes = startDate.getMinutes()
    let formattedStartDate = `${startDay} : ${startMonth} : ${startYear} `;
    let endDate = new Date(response.end_date)
    let endDay = endDate.getDate()
    let endMonth = endDate.getMonth()+1
    let endYear = endDate.getFullYear()
    let endHours = endDate.getHours()
    let endMinutes = endDate.getMinutes()
    let formattedEndDate = `${endDay} : ${endMonth} : ${endYear} `
    console.log(response)
    let eventEditModal = document.getElementById('pollEventEditModal')
    let row = ''
    row += `
    <div> 
    <label for="updateEventId"></label>
    <input type="hidden" value="${response.id}" name="updateEventId" id="updatePollEventId">

    <label  for="updateEventTitle" class="font-monospace m-2" >Title <i class="fa-solid fa-sign-hanging"></i></label>
    <input style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);" type="text"  class="form-control font-monospace m-2" value="${response.title}" id="updatePollEventTitle" name="updateEventTitle">

    <label for="updateEventDescription" class="font-monospace m-2" >Description <i class="fa-solid fa-info"></i></label>
    <textarea style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);" type="text" class="form-control font-monospace m-2" id="updatePollEventDescription" name="updateEventDescription">${response.description}</textarea>

    <b class="form-control font-monospace m-2" style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);">${formattedStartDate}</b>
    <label for="updateEventStartDate"  class="font-monospace m-2"  >Start <i class="fa-regular fa-clock"></i></label>
    <input style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);" class="form-control font-monospace m-2" type="date" id="updatePollEventStartDate" name="updateEventStartDate" value=''>

    <b class="form-control" class="font-monospace m-2" style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);">${formattedEndDate}</b>
    <label for="updateEventEndDate" class="font-monospace m-2" >End <i class="fa-solid fa-clock"></i></label>
    <input  style="border: none; border-radius: 10px; box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);" class="form-control font-monospace m-2" type="date" id="updatePollEventEndDate" name="updateEventEndDate" value=''>

    <label for="options" class="font-monospace m-2">Add vote options </label>
    <div class="d-flex font-monospace m-2">
    <input type="text" name="voteOptionInputForUpdate" id="voteOptionInputForUpdate" class="form-control font-monospace m-2">
    <button type="button" class="btn btn-primary font-monospace m-2 " onclick="createAVoteOptionForUpdate()">
    <i class="fa-solid fa-plus text-white"></i>
    </button>
    </div>
    <div>
        <ul id="ulTagForUpdate" class="font-monospace m-2">
            
        </ul>
    </div>
    <div>
    <div class="form-check">
     `

    response.voteOptions.forEach(r=>{
        row += `
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input font-monospace m-2" id="votodelete"   value="${r.id}" >
          ${r.type}
        </label> `
    })
    row +=
        `      </div>
    </div>
    <div id="labelForPoll" onclick="openFileBox()" type="button" style="border:none; background-color:white;">
    <label for="updateEventPhoto"  class="font-monospace m-2">Photo <i class="fa-solid fa-camera"></i></label>
    <input class="form-control" style="display:none;" type="file" id="updatePollEventPhoto" name="updateEventPhoto">
    </div>

    <img class="from-control" src="${response.photo}" style="width:100px; height;100px; border-radius:20px;" id="${response.id}-poll-event-edit-url">
    <button  id="restoreBtn" class="btn btn-success hidden font-monospace m-2" onclick="restorePollPhoto(${response.id})">Restore</button>
    <button class="btn btn-danger font-monospace m-2" id="photoRemoveBtn" onclick="deleteEditPollEventPhoto(${response.id})">Delete</button> 
    </div>
    
    <button type="button" onclick="getPollEventUpdateData()"  data-bs-dismiss="offcanvas"  aria-label="Close"  class="btn btn-primary font-monospace m-2"   >Update</button>
 
    `
    eventEditModal.innerHTML = row
}

async function getPollEventUpdateData(){
    let eventId = document.getElementById('updatePollEventId').value
    let eventTitle = document.getElementById('updatePollEventTitle').value
    let updateEventDescription = document.getElementById('updatePollEventDescription').value
    let start = document.getElementById('updatePollEventStartDate').value
    let end = document.getElementById('updatePollEventEndDate').value
    let oldPhoto = document.getElementById(eventId+'-poll-event-edit-url').src
    let newPhoto = document.getElementById('updatePollEventPhoto').files
    let votes = []
    let cb = document.querySelectorAll('#votodelete')
    cb.forEach(c=>{
        if(c.checked){
            votes.push(c.value)
        }
    })
    let arr = []
    let values = document.querySelectorAll('.voteOptionForUpdate')
    values.forEach(v=>{
        arr.push(v.textContent.trim())
    })
    console.log(arr)
    console.log(votes)
    console.log(eventId)
    console.log(eventTitle)
    console.log(updateEventDescription)
    console.log(start)
    console.log(end)
    console.log(location)
    console.log(oldPhoto)
    console.log(newPhoto)

    let data = await fetch('/event/getEventById/'+eventId,{
        method : 'GET'
    })
    let response = await data.json()
    console.log(response)
    let startDate = new Date(response.start_date)
    let startDay = String(startDate.getDate()).padStart(2, '0')
    let startMonth = String(startDate.getMonth()+1).padStart(2, '0')
    let startYear = startDate.getFullYear()
    let startHours = startDate.getHours()
    let startMinutes = startDate.getMinutes()
    let formattedStartDate = `${startYear}-${startMonth}-${startDay}`;
    let endDate = new Date(response.end_date)
    let endDay = String(endDate.getDate()).padStart(2, '0')
    let endMonth = String(endDate.getMonth()+1).padStart(2, '0')
    let endYear = endDate.getFullYear()
    let endHours = endDate.getHours()
    let endMinutes = endDate.getMinutes()
    let formattedEndDate = ` ${endYear}-${endMonth}-${endDay}`

    if(newPhoto === ''){
        console.log('new photo is empty')
        newPhoto = null
    }
    if(start === ''){
        console.log('new statt is empty')
        start = 'old'
    }
    if(end === ''){
        console.log('new end is empty')
        end = 'old'
    }

    let updateEvent = {
        eventId : eventId,
        title : eventTitle,
        start_date : start,
        end_date : end,
        description : updateEventDescription,
        location : location,
        photo : oldPhoto,
        newPhoto :newPhoto
    }
    let formData = new FormData()
    formData.append('eventId',eventId)
    formData.append('title',eventTitle)
    formData.append('startDate',start)
    formData.append('endDate',end)
    formData.append('description',updateEventDescription)
    formData.append('location',location)
    formData.append('photo',oldPhoto)
    formData.append('oldOpts',votes)
    formData.append('newOpts',arr)
    if(newPhoto !== null){
        formData.append('newPhoto',newPhoto[0])
    }
    if(newPhoto === null){
        formData.append('newPhoto',null)
    }

    console.log(Object.fromEntries(formData.entries()))
    console.log(updateEvent)
    console.log(JSON.stringify(updateEvent))
    let send = await fetch('/event/pollEventUpdate',{
        method : 'POST',
        body : formData
    })
    let r = await send.json()
    console.log(r)
    if(r){
        let mainContent = document.getElementById('poll-post-update-'+r.id)
        console.log(mainContent)
        let pollContent = document.getElementById('poll-post-update-content-'+r.id);
        if(pollContent){
            console.log('poll is deleted successfully')
            pollContent.remove()
        }
        let row = ''
        let hidden = await checkVoted(r.id) === false ? '' : 'hidden'
        let notHidden = await checkVoted(r.id) === false ? 'hidden' : ''
        let expired = ''
        if(new Date()>new Date(r.end_date)){
            expired=`

<div class="alert alert-danger d-flex align-items-center" style=" width:265px; position: absolute; top: 55px; left:120px;  z-index: 1;" role="alert">
<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
<div>
<i class="fa-solid fa-triangle-exclamation"></i>
POLL IS EXPIRED
</div>
</div>

            `
        }
        row +=  `
        <div id="poll-post-update-content-${r.id}" class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            ${expired}
            <img src="${r.photo}" style="max-width:170px; postion:relative;" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body" style="max-height: 200px; overflow-y: auto;">
            <div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-about-${r.id}" role="tabpanel" aria-labelledby="nav-about-tab-${r.id}">

  <h5 class="card-title align-middle font-monospace">${r.title}</h5>
  <p class="card-text font-monospace">${r.description}</p>

  </div>
  <div class="tab-pane fade" id="nav-vote-${r.id}" role="tabpanel" aria-labelledby="nav-vote-tab-${r.id}">


            `
        let totalVotes = 0;
        for (let v of r.voteOptions) {
            let count = await getCount(v.id);
            totalVotes += count;
        }
        for (let v of r.voteOptions) {
            let count = await getCount(v.id);
            let percentage = totalVotes === 0 ? 0 : (count / totalVotes) * 100;
            row += `
        <div class="vote-option d-flex mt-1">
        <div class="d-block">
        <div class="font-monospace ">${v.type}</div>
                <div class="d-flex">
                <div class="progress" style="height: 16px; width: 170px;">

                    <div class="progress-bar bg-primary" id="${v.id}-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">${Math.floor(percentage)}%</div>
                </div>`
                if(new Date()<new Date(r.end_date)){
            row += ` <button id="vote-btn-${r.id}" class="${hidden} give-btn" onclick="voteVoteOption(${v.id},${r.id})"><i class="fa-solid fa-hand" style="width:7px; margin-right:11px;"></i></button> `;
                }
            let yes = await checkVotedMark(v.id)
            let markIcon = 'hidden'
            if(yes === true){
                markIcon = ''
            }
            console.log(yes)


            row += ` <div id="mark-id-${v.id}" class="${markIcon}"> <i class="fa-regular fa-circle-check"></i> </div>
                </div>
                </div>
                 `



            row+=`</div>`

        }
        if(new Date()<new Date(r.end_date)){
        row += `   <button id="unvote-btn-${r.id}" class="${notHidden} erase-btn" onclick = "unVote(${r.id})"><i class="fa-solid fa-eraser"></i></button> `
        }
        row+=`</div>
    </div>
          </div>
    </div>
  </div>
</div>


    `
    console.log("---------row"+row)
    mainContent.innerHTML = row

    await removeCat()
    }
}

async function checkPostOwnerOrAdmin(id){
    let data = await fetch(`/post/checkPostOwnerOrAdmin/${id}`)
    let response = await data.json()
    console.log(response[0])
    return response[0]
}





 const pressedLikeForEvent = async (id, type) => {
     console.log('PostId', id);
     const myObj = {
         postId: id,
         sender: loginUser,
         content: ` reacted to your announcement!`,
         type: type
     };
     stompClient.send('/app/react-event-message', {}, JSON.stringify(myObj));
 };

 const fetchReactCountForEvent =async (id) => {
     const sizeData = await fetch(`/event-react-type/${id}`);
     const eventReactCount = await sizeData.json();
     return eventReactCount;
 }

const fetchReactTypeForEvent = async (id) => {
    try {
        const dataType = await fetch(`/event-user-react-type/${id}`);
        if (!dataType.ok) {
            throw new Error(`Network response was not ok: ${dataType.statusText}`);
        }
        const eventReactType = await dataType.json();
        console.log('Fetched reactTypeData:', eventReactType);
        return eventReactType;
    } catch (error) {
        console.error('Failed to fetch react type:', error);
        return null;
    }
}

 const removeReactionForEvent = async (id) => {
     const cancelType = await fetch(`/remove-like-eventReact-type/${id}`);
     if (!cancelType.ok) {
         alert('something wrong');
     }
     console.log('hehhe')
 };


videoObserver()

async function videoObserver(){
    console.log('observing------->')
    const videos = document.querySelectorAll('#myVideo');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    });

    videos.forEach(video => {
        console.log('ha ha ha ha  =====----=-=-=-=-')
      observer.observe(video);
    });
}

document.body.addEventListener('hidden.bs.modal', async function (event) {
    await videoObserver()
  });


  let currentPageForPost = '0';
  let  isFetchingForPost = false;
  let  hasMoreForPost = true;

  let  currentPageForEvent = '0'
  let  isFetchingForEvent = false
  let hasMoreForEvent = true

  let  currentPageForPoll = '0'
  let  isFetchingForPoll = false;
  let  hasMoreForPoll = true;

  let  scrollPost = true
  let scrollEvent = false
  let  scrollPoll = false



let loadingModalBox = new bootstrap.Modal(document.getElementById('loadingModalBox'))
// let currentPageForPost = '0';
// let isFetchingForPost = false;
// let hasMoreForPost = true;

// let currentPageForEvent = '0'
// let isFetchingForEvent = false
// let hasMoreForEvent = true

// let currentPageForPoll = '0'
// let isFetchingForPoll = false;
// let hasMoreForPoll = true;

// let scrollPost = true
// let scrollEvent = false
// let scrollPoll = false






let communityId = localStorage.getItem('communityIdForDetailPage');




let postTabIndex = document.getElementById('newsfeed-tab').addEventListener('click',function(){
   scrollPost = true
   scrollEvent = false
   scrollPoll = false
   document.getElementById('newsfeed').innerHTML = ''
   currentPageForPost =0

})

let eventTabIndex = document.getElementById('events-tab').addEventListener('click',function(){
   scrollPost = false
   scrollEvent = true
   scrollPoll = false
   currentPageForEvent = 0
   document.getElementById('events').innerHTML = ''
   currentPageForPost =0
})

let pollTabIndex = document.getElementById('polls-tab').addEventListener('click',function(){
   scrollPost = false
   scrollEvent = false
   scrollPoll = true
   currentPageForPoll = 0
   document.getElementById('polls').innerHTML = ''
   currentPageForPost =0
})

window.addEventListener('scroll', async () => {
   if(isFetchingForPost || !hasMoreForPost){
       return;
   }

   if(isFetchingForEvent || !hasMoreForEvent){
       return;
   }

   if(isFetchingForPoll || !hasMoreForPoll){
       return;
   }

   if((window.innerHeight + window.scrollY) >= document.body.offsetHeight && scrollPost === true){
       await videoObserver()
       console.log('here here here')
       currentPageForPost++;
        await getPosts();
        await videoObserver()
   }
   if((window.innerHeight + window.scrollY) >= document.body.offsetHeight && scrollEvent === true){
       currentPageForEvent++;
        await getEvents();
   }
   if((window.innerHeight + window.scrollY) >= document.body.offsetHeight && scrollPoll === true){
       currentPageForPoll++;
        await getPolls();
   }
});



const makeFileDownloadPost = async (resources) => {
    console.log('d ko youk tl naw')
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('card','shadow');
    parentDiv.style.marginLeft = '70px'
    parentDiv.style.width = '300px';

   
    
    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');

    for (const r of resources) {
        let name = r.description
        console.log('loop pat nay b')
        const li = document.createElement('li');
        li.classList.add('list-group-item','d-flex');
        li.style.maxWidth = '400px'
        li.style.justifyContent = 'space-between' 

        const mDiv = document.createElement('div')
        mDiv.textContent = r.description
        mDiv.classList.add('font-monospace')
        

        const downloadIcon = document.createElement('i')
        downloadIcon.classList.add('fa-solid','fa-down-long','text-primary')
 

        const a = document.createElement('a');
        a.href = r.raw;
        a.classList.add('font-monospace')  
        a.onclick = (event) => downloadFile(event,r.raw,r.description)
        console.log(name) 

        
        a.appendChild(downloadIcon)
        li.appendChild(mDiv)
        li.appendChild(a)
        ul.appendChild(li)
    }
    parentDiv.appendChild(ul)
    return parentDiv.outerHTML
}

const showPhotoUrl =async (url) => {
    let previousUrlValue =  document.getElementById('postShareUrl');
    document.getElementById('forShareingContent').style.width = '800px';
    const divEl = document.getElementById('forSharingButton');
    if(divEl){
        divEl.remove();
    }
    await getShareGroup();
    console.log("URL",previousUrlValue)
    console.log("Original",url)
    previousUrlValue.value = '';
    previousUrlValue.value = url;
}

const copyButton = async () => {
    let copyText = document.getElementById("postShareUrl");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

//for share group start

const getShareGroup = async () => {
    const data = await fetch(`/user/getCommunity-list-forShare`);
    const res = await data.json();
    console.log("hahahahah yaya");
    const selectBox = document.getElementById('statusForShare');
    const postShareDiv = document.getElementById('forPostShareDiv');
    selectBox.innerHTML = '';

    const allUsersOption = document.createElement('option');
    allUsersOption.value = '';
    allUsersOption.text = 'Select a group';
    selectBox.appendChild(allUsersOption);

    res.forEach((item) => {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.name;
        selectBox.appendChild(option);
    });

    const postShareButton = document.createElement('button');
    postShareButton.type = 'button';
    postShareButton.id = 'forSharingButton';
    postShareButton.classList.add('btn','btn-outline-primary');
    postShareButton.style.height = '50px';
    postShareButton.innerHTML = '<i class="fa-solid fa-share"></i> Share';
    postShareButton.style.display = 'none';

    selectBox.addEventListener('change', newChild => {
        if (selectBox.value) {
            postShareButton.style.display = 'block';
            const divEL = document.getElementById('forSharingButton');
            document.getElementById('forShareingContent').style.width = '850px';
            if(!divEL) {
                postShareDiv.appendChild(postShareButton);
            }
            postShareButton.addEventListener('click',async () => {
                const postURl = document.getElementById('postShareUrl').value;
                console.log("PostURl",postURl)
                await postShareToGroup(selectBox.value,loginUser,postURl);
            });
        } else {
            document.getElementById('forShareingContent').style.width = '800px';
            postShareButton.style.display = 'none';
        }
    });
}

const postShareToGroup =async (id,staffId,content) => {
    const chatMessage = {
        roomId: id,
        sender: staffId,
        content: content,
    };
    const getData = await fetch(`/share-toChatRoom`,{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(chatMessage)
    })
    if(!getData){
        alert("Something wrong please try again!");
    }
    const res = await getData.text();
    if(res){
        let alertMessage =  `${res}`;
        let alertStyle = `
            background-color: white;
            color: green;
            border: 1px solid #cc0000;
             border-radius: 15px;
        `;
        let styledAlert = document.createElement('div');
        styledAlert.style.cssText = `
            ${alertStyle}
            position: fixed;
            top: 25%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            display: none;
        `;
        styledAlert.innerHTML = alertMessage;


        document.body.appendChild(styledAlert);


        styledAlert.style.display = 'block';

        setTimeout(function() {
            styledAlert.style.display = 'none';
        }, 3000);
    }
}



async function getPosts(){
    isFetchingForPost = true
    let communityId = localStorage.getItem('communityIdForDetailPage')
    let data = await fetch(`/api/community/getPostsForCommunityDetailPage/${communityId}/${currentPageForPost}`)
    let response = await data.json()
    isFetchingForPost = false
    console.log(response)
    console.log('Size',response.length)
        let posts = ''
        if (response.length === 0) {
            hasMoreForPost = false;
            displayNoPostMessage();
        }
            // localStorage.setItem('currentPage', response);
            for (const p of response) {
                let res = p.resources
                let thisIsRawPost = false
                let target = '' 
                console.log(res)
                    let ug = p.userGroup !== null ? p.userGroup : null
                    let gp = ug !== null ? ug.community : null 
                    let gpName = gp !== null ? gp.name : null
                    let CommunityName = gpName === null ? '' : `<span class="font-monospace d-block badge rounded-pill bg-dark">${gpName} <i class="fa-solid fa-users text-white" style="margin-top:3px;"></i></span>
                    `
                let createdTime = await timeAgo(new Date(p.createdDate))
                const reactCount = await fetchSizes(p.id);
                const reactType = await fetchReactType(p.id);
                let likeButtonContent = '';
                if (reactType === "LIKE") {
                    likeButtonContent = `<div class="button_icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
    </div>
            <span  style="color: black;">LIKE ${reactCount.length}</span>`
                    ;
                } else if (reactType === "LOVE") {
                    likeButtonContent = `<img src="/static/assets/img/love.png" alt="Love" style="width: 25px; height: 25px"/>
               <span>LOVE ${reactCount.length}</span>`;
                } else if (reactType === "CARE") {
                    likeButtonContent = `<img src="/static/assets/img/care.png" alt="Care" style="width: 25px; height: 25px" />
                      <span>CARE ${reactCount.length}</span>`;
                } else if (reactType === "ANGRY") {
                    likeButtonContent = `<img src="/static/assets/img/angry.png" alt="Angry" style="width: 25px; height: 25px" />
                     <span>ANGRY ${reactCount.length}</span>`;
                } else if (reactType === "HAHA") {
                    likeButtonContent = `<img src="/static/assets/img/haha.png" alt="Haha" style="width: 25px; height: 25px" />
                  <span>HAHA ${reactCount.length}</span>`;
                } else if (reactType === "SAD") {
                    likeButtonContent = `<img src="/static/assets/img/sad.png" alt="Sad" style="width: 25px; height: 25px" />
        <span>SAD ${reactCount.length}</span>`;
                } else if (reactType === "WOW") {
                    likeButtonContent = `<img src="/static/assets/img/wow.png" alt="Wow" style="width: 25px; height: 25px" />
                    <span>WOW ${reactCount.length}</span>`;
                } else {
                    likeButtonContent = `<div class="button_icon">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/></svg>
            </div>
            <span>Like ${reactCount.length}</span>`
                }
                const commentCountSize = await fetchCommentSizes(p.id);
                const formattedDescription = await highlightMentions(p.description.replace(/\n/g, '<br>'));
                let post = '';
                post += `

                <div class="post" id="post-delete-section-${p.id}">
                <div class="post-top" style="max-width:500px; justify-content:space-between;"> 
                
                <div class="d-flex">
               
                    <div>
                    <img src="${p.user.photo}" alt="" style="width:50px; height:50px; border-radius:20px;">
                    </div>
                    <div class="post-info" style="width:100px;">
      
                    <p class="name font-monospace" style="margin-bottom:3px;">${p.user.name}</p>
                    ${CommunityName} 
                    <span class="time font-monospace">${createdTime}</span>
                   
                </div>
                </div>`
                let user = await checkPostOwnerOrAdmin(p.id)
                //   if(user === 'ADMIN' || user === 'OWNER'){
                    post += `<div class="dropdown offset-8">
                    <div class=" " onclick="getPostDetail(${p.id})"     id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-h "></i>
                          </div>
                  
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li class="font-monospace"><i class="fa-solid fa-link text-info" style="margin-left: 10px" data-bs-toggle="modal" data-bs-target="#postUrlForShare" onclick="showPhotoUrl('${p.url}')"></i> Get link</li>`
                    if(user === 'ADMIN' || user === 'OWNER'){
                    if(user=== 'OWNER'){
                        post+= `<li><div class="dropdown-item font-monospace" data-bs-toggle="offcanvas" data-bs-target="#postEditOffcanvas"><i class="fa-solid fa-screwdriver-wrench text-success"></i> Edit post</div></li>`
                    }
                      
                       post +=`<li><div data-bs-toggle="modal" data-bs-target="#deletePostAsk${p.id}" class="dropdown-item font-monospace" ><i class="fa-solid fa-trash text-danger"></i> Delete post</div>`
                }
                       post+=`</li> 
                    </ul>
                  </div> 
                  
                    
                    <!-- Modal -->
      <div class="modal fade" id="deletePostAsk${p.id}" tabindex="-1" aria-labelledby="deletePostAsk${p.id}" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content"> 
            <div class="modal-body font-monospace">
            Are you sure do you want to delete this post ?
            <div class="d-flex" style="margin-left:300px; margin-top:30px;">
            <button data-bs-dismiss="modal" class="btn btn-success"><i class="fa-solid fa-xmark"></i></button>
            <button onclick="deletePost(${p.id})" data-bs-dismiss="modal" class="btn btn-danger"><i class="fa-solid fa-check"></i></button>
            </div>
            </div>
       
          </div>
        </div>
      </div>
      `
                    // }
      
                    for(file of res){
                      if(file.raw !== null){
                          thisIsRawPost = true
                           
                      }else{
                          target =`#newsfeedPost${p.id}`
                      }
                  }
                           
                  
                post+=`</div>
               
          <div id="post-update-section-${p.id}">
          <div class="post-content-${p.id}" data-bs-toggle="modal" data-bs-target=${target} >
                ${formattedDescription}
                `
                for(file of res){
                  if(file.raw !== null){
                      thisIsRawPost = true
                      
                  console.log('we are here')
                  post += await makeFileDownloadPost(p.resources)
                  break;
                  }
              }
              if(thisIsRawPost === false){
                  let oneTag = null
                  let oneCloseTag = null
                  let twoTag = null
                  let twoCloseTag = null
                  let threeTag = null
                  let threeCloseTag = null
                  let fourTag = null
                  let fourCloseTag = null
                  let fiveTag = null
                  let fiveCloseTag = null
                  let oneControlAttr = null
                  let twoControlAttr = null
                  let threeControlAttr = null
                  let fourControlAttr = null
                  let fiveControlAttr = null
                  let one = null
                  let two = null
                  let three = null
                  let four = null
                  let five = null
                  let six = null
      
                  if(p.resources.length === 1 ){
                      p.resources.forEach((r, index) => {
                          if(index === 0 && r.photo !== null){
                              console.log('two')
                              one = r.photo
                              oneTag = 'img'
                              oneCloseTag = ''
                              oneControlAttr = ''
                          }else if(index === 0 && r.video !== null){
                              one = r.video
                              oneTag = 'video'
                              oneCloseTag = '</video>'
                              oneControlAttr = 'controls'
                          }
                          if (one !== null  ) {
                              post+= `
      <div class="d-flex" style="margin-left:65px;"> 
      <${oneTag} id="myVideo" ${oneControlAttr} src="${one}" class="img-fluid " style="max-width:400px; border-radius : 15px; max-height:500px;   height: auto; width: auto;" alt="">${oneCloseTag}
      </div>
      `
                          }
                      })
                  }
                  if(p.resources.length === 2){
                      p.resources.forEach((r, index) => {
                          if(index === 0 && r.photo !== null){
                              console.log('two')
                              one = r.photo
                              oneTag = 'img'
                              oneCloseTag = ''
                              oneControlAttr = ''
                          }else if(index === 0 && r.video !== null){
                              one = r.video
                              oneTag = 'video'
                              oneCloseTag = '</video>'
                              oneControlAttr = 'controls'
                          }
                          if(index === 1 && r.photo !== null){
                              two = r.photo
                              twoTag = 'img'
                              twoCloseTag = ''
                              twoControlAttr = ''
                          }else if(index === 1 && r.video !== null){
                              two = r.video
                              twoTag = 'video'
                              twoCloseTag = '</video>'
                              twoControlAttr = 'controls'
                          }
                          if (one !== null && two !== null  ) {
                              post+= `
      <div class="d-flex" style="margin-left:120px;" > 
      <${oneTag} id="myVideo" ${oneControlAttr} src="${one}" class="img-fluid " style="max-width:200px; border-radius : 15px; max-height:200px; margin:2px;  height: auto; width: auto;" alt="">${oneCloseTag}
      <${twoTag} id="myVideo" ${twoControlAttr} src="${two}" class="img-fluid " style="max-width:200px; border-radius : 15px; max-height:200px; margin:2px; height: auto; width: auto;" alt="">${twoCloseTag}
      </div> `
                          }
                      })
                  }
                  if(p.resources.length === 3){
                      p.resources.forEach((r, index) => {
                          if(index === 0 && r.photo !== null){
                              console.log('two')
                              one = r.photo
                              oneTag = 'img'
                              oneCloseTag = ''
                              oneControlAttr = ''
                          }else if(index === 0 && r.video !== null){
                              one = r.video
                              oneTag = 'video'
                              oneCloseTag = '</video>'
                              oneControlAttr = 'controls'
                          }
                          if(index === 1 && r.photo !== null){
                              two = r.photo
                              twoTag = 'img'
                              twoCloseTag = ''
                              twoControlAttr = ''
                          }else if(index === 1 && r.video !== null){
                              two = r.video
                              twoTag = 'video'
                              twoCloseTag = '</video>'
                              twoControlAttr = 'controls'
                          }
                          if(index === 2 && r.photo !== null){
                              three = r.photo
                              threeTag = 'img'
                              threeCloseTag = ''
                              threeControlAttr = ''
                          }else if(index === 2 && r.video !== null){
                              three = r.video
                              threeTag = 'video'
                              threeCloseTag = '</video>'
                              threeControlAttr = 'controls'
                          }
                          if (one !== null && two !== null && three !== null  ) {
                              post+= `
      <div class="d-flex" style="margin-left:10px;"> 
      <${oneTag} id="myVideo" ${oneControlAttr} src="${one}" class="img-fluid " style="max-width:250px; border-radius : 12px; max-height:200px; margin:2px; height: auto; width: auto;" alt="">${oneCloseTag}
      <${twoTag} id="myVideo" ${twoControlAttr} src="${two}" class="img-fluid " style="max-width:250px; border-radius : 12px; max-height:200px; margin:2px; height: auto; width: auto;" alt="">${twoCloseTag}
      </div>
      <div class="d-flex" style="margin-left:10px;"> 
      <${threeTag} id="myVideo" ${threeControlAttr} src="${three}" class="img-fluid " style="max-width:250px; border-radius : 12px; max-height:200px; margin-left:127px; height: auto; width: auto;" alt="">${threeCloseTag}
      </div>`
                          }
                      })
                  }
                  if(p.resources.length === 4){
                      p.resources.forEach((r, index) => {
                          console.log(r)
      
                          if(index === 0 && r.photo !== null){
                              console.log('two')
                              one = r.photo
                              oneTag = 'img'
                              oneCloseTag = ''
                              oneControlAttr = ''
                          }else if(index === 0 && r.video !== null){
                              one = r.video
                              oneTag = 'video'
                              oneCloseTag = '</video>'
                              oneControlAttr = 'controls'
                          }
                          if(index === 1 && r.photo !== null){
                              two = r.photo
                              twoTag = 'img'
                              twoCloseTag = ''
                              twoControlAttr = ''
                          }else if(index === 1 && r.video !== null){
                              two = r.video
                              twoTag = 'video'
                              twoCloseTag = '</video>'
                              twoControlAttr = 'controls'
                          }
                          if(index === 2 && r.photo !== null){
                              three = r.photo
                              threeTag = 'img'
                              threeCloseTag = ''
                              threeControlAttr = ''
                          }else if(index === 2 && r.video !== null){
                              three = r.video
                              threeTag = 'video'
                              threeCloseTag = '</video>'
                              threeControlAttr = 'controls'
                          }
                          if(index === 3 && r.photo !== null){
                              four = r.photo
                              fourTag = 'img'
                              fourCloseTag = ''
                              fourControlAttr = ''
                          }else if(index === 3 && r.video !== null){
                              four = r.video
                              fourTag = 'video'
                              fourCloseTag = '</video>'
                              fourControlAttr = 'controls'
                          }
      
      
                          if (one !== null && two !== null && three !== null && four !== null) {
                              post+= `
        <div class="d-flex" style="margin-left:60px;"> 
        <${oneTag} id="myVideo" ${oneControlAttr} src="${one}" class="img-fluid " style="max-width:200px; border-radius : 15px; max-height:200px; margin:3px; height: auto; width: auto;" alt="">${oneCloseTag}
        <${twoTag} id="myVideo" ${twoControlAttr} src="${two}" class="img-fluid " style="max-width:200px; border-radius : 15px; max-height:200px; margin:3px; height: auto; width: auto;" alt="">${twoCloseTag}
        </div>
        <div class="d-flex" style="margin-left:60px;"> 
        <${threeTag} id="myVideo" ${threeControlAttr} src="${three}" class="img-fluid " style="max-width:200px; border-radius : 15px; max-height:200px; margin:3px; height: auto; width: auto;" alt="">${threeCloseTag}
        <${fourTag} id="myVideo" ${fourControlAttr} src="${four}" class="img-fluid " style="max-width:200px; border-radius : 15px; max-height:200px; margin:3px; height: auto; width: auto;" alt="">${fourCloseTag}
        </div>`
                          }
                      })
      
                  }
      
                  if(p.resources.length > 4 ){
                      let text = p.resources.length === 5 ? '' : p.resources.length - 5
                      console.log(text)
                      p.resources.forEach((r, index) => {
                          if(index === 0 && r.photo !== null){
                              console.log('two')
                              one = r.photo
                              oneTag = 'img'
                              oneCloseTag = ''
                              oneControlAttr = ''
                          }else if(index === 0 && r.video !== null){
                              one = r.video
                              oneTag = 'video'
                              oneCloseTag = '</video>'
                              oneControlAttr = 'controls'
                          }
                          if(index === 1 && r.photo !== null){
                              two = r.photo
                              twoTag = 'img'
                              twoCloseTag = ''
                              twoControlAttr = ''
                          }else if(index === 1 && r.video !== null){
                              two = r.video
                              twoTag = 'video'
                              twoCloseTag = '</video>'
                              twoControlAttr = 'controls'
                          }
                          if(index === 2 && r.photo !== null){
                              three = r.photo
                              threeTag = 'img'
                              threeCloseTag = ''
                              threeControlAttr = ''
                          }else if(index === 2 && r.video !== null){
                              three = r.video
                              threeTag = 'video'
                              threeCloseTag = '</video>'
                              threeControlAttr = 'controls'
                          }
                          if(index === 3 && r.photo !== null){
                              four = r.photo
                              fourTag = 'img'
                              fourCloseTag = ''
                              fourControlAttr = ''
                          }else if(index === 3 && r.video !== null){
                              four = r.video
                              fourTag = 'video'
                              fourCloseTag = '</video>'
                              fourControlAttr = 'controls'
                          }
                          if(index === 4 && r.photo !== null){
                              five = r.photo
                              fiveTag = 'img'
                              fiveCloseTag = ''
                              fiveControlAttr = ''
                          }else if(index === 4 && r.video !== null){
                              five = r.video
                              fiveTag = 'video'
                              fiveCloseTag = '</video>'
                              fiveControlAttr = 'controls'
                          }
      
                          if(index === 5 ){
                              six = 'hello'
                          }
      
                          if (one !== null && two !== null && three !== null && four !== null && five !== null && six === null) {
      
                              post+= `
        <div class="d-flex" style="margin-left:10px;"> 
        <${oneTag} id="myVideo" ${oneControlAttr} src="${one}" class="img-fluid " style="max-width:250px; border-radius : 15px; max-height:200px; margin:2px; height: auto; width: auto;" alt="">${oneCloseTag}
        <${twoTag} id="myVideo" ${twoControlAttr} src="${two}" class="img-fluid " style="max-width:250px; border-radius : 15px; max-height:200px; margin:2px; height: auto; width: auto;" alt="">${twoCloseTag}
        </div>
        <div class="d-flex" style="margin-left:10px;"> 
        <${threeTag} id="myVideo" ${threeControlAttr} src="${three}" class="img-fluid " style="max-width:166px; border-radius : 15px; max-height:200px; margin:2px; height: auto; width: auto;" alt="">${threeCloseTag}
        <${fourTag} id="myVideo" ${fourControlAttr} src="${four}" class="img-fluid " style="max-width:166px; border-radius : 15px; max-height:200px; margin:2px; height: auto; width: auto;" alt="">${fourCloseTag}
        <div style="position: relative; display: inline-block;" >
        <${fiveTag} id="myVideo" ${fiveControlAttr} src="${five}" class="img-fluid" style="max-width:166px; border-radius : 15px; max-height:200px; margin:2px; height: auto; width: auto;" alt="">${fiveCloseTag}
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 25px;">+${text}</div>
        </div>
        </div>`
                          }
      
                      })
      
                  }
                
              }
                 
      
                          post += `
                </div>
                </div>
                <div class="post-bottom">
                    <div class="action" style="height: 50px">
          <div class="button_wrapper">
                  <div class="all_likes_wrapper">
                      <div data-title="LIKE">
                          <img src="/static/assets/img/like.png" alt="Like" />
                      </div>
                      <div data-title="LOVE">
                          <img src="/static/assets/img/love.png" alt="Love" />
                      </div>
                      <div data-title="CARE">
                          <img src="/static/assets/img/care.png" alt="Care" />
                      </div>
                      <div data-title="HAHA">
                          <img src="/static/assets/img/haha.png" alt="Haha" />
                      </div>
                      <div data-title="WOW">
                          <img src="/static/assets/img/wow.png" alt="Wow" />
                      </div>
                      <div data-title="SAD">
                          <img src="/static/assets/img/sad.png" alt="Sad" />
                      </div>
                      <div data-title="ANGRY">
                          <img src="/static/assets/img/angry.png" alt="Angry" />
                      </div>
                  </div>
                  <button class="like_button" id="${p.id}">
                    ${likeButtonContent}
                  </button>
              </div>
                    </div>
                    <div class="action">
                        <i class="fa-regular fa-comment"></i>
                        <span onclick="pressedComment('${p.id}')"  data-bs-toggle="modal" data-bs-target="#commentStaticBox" id="commentCountStaticBox-${p.id}">Comment ${commentCountSize}</span>
                    </div>
                </div>
            </div>
          <div id="detail-modal-${p.id}">
          <div class="modal fade" id="newsfeedPost${p.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg"  >
              <div class="modal-content" style=" background-color:transparent;  overflow-y: hidden;">
                <div class="modal-body p-0">
                  <div id="carouselExampleControlsPostSearch${p.id}" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">`

                          p.resources.forEach((r, index) => {
                              let active = index == 0 ? 'active' : ''
                              if (r.photo === null && r.video !== null) {
                                  post += ` <div   class="carousel-item ${active}" style="object-fit: cover; width:100%; height : 600px;" >
                        <video controls id="myVideo"  src="${r.video}" class="d-block  carousel-image " style=" width:100%; height : 100%;"alt="..."></video>
                        <div class="carousel-caption d-none d-md-block">
                        <p>${r.description.replace(/\n/g, '<br>')}</p>
                      </div>
                        </div> `
                              } else if (r.video === null && r.photo !== null) {
                                  post += `<div    class="carousel-item ${active}" style="object-fit: cover; width:100%; height : 600px;">
                        <img  src="${r.photo}"   class="d-block  carousel-image " style=" width:100%; height : 100%;" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                        <p>${r.description.replace(/\n/g, '<br>')}</p>
                      </div>
                      </div>`
                              } else {
                                  post += `<div    class="carousel-item ${active}" style="object-fit: cover; width:100%; height : 600px;">
                        <video id="myVideo" controls src="${r.video}" class="d-block  carousel-image " style=" width:100%; height : 100%;" alt="..."></video>
                        <div class="carousel-caption d-none d-md-block">
                        <p>${r.description.replace(/\n/g, '<br>')}</p>
                      </div>
                      </div>`
                                  post += `<div    class="carousel-item ${active}" style="object-fit: cover; width:100%; height : 600px;">
                      <img src="${r.photo}"class="d-block  carousel-image " style=" width:100%; height : 100%;"alt="...">
                      <div class="carousel-caption d-none d-md-block">
                      <p>${r.description.replace(/\n/g, '<br>')}</p>
                    </div>
                    </div>
                     `
                              }
                          })
                          post+=`

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsPostSearch${p.id}" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsPostSearch${p.id}" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>`;

                          posts += post;
                      }
            let range = document.createRange();
            let fragment = range.createContextualFragment(posts);
            newsfeed.appendChild(fragment);
   // }

    const likeButtons = document.querySelectorAll(".like_button");
    likeButtons.forEach(likeButton => {
        likeButton.addEventListener('click', async (event) => {
            const postId = likeButton.id;
            const currentReactType = await fetchReactType(postId);
            console.log('sdd', currentReactType);
            if ((currentReactType !== null) && (currentReactType !=="OTHER")) {
                await removeReaction(postId);
                const reactCount = await fetchSizes(postId);
                likeButton.innerHTML = `<div class="button_icon">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/></svg>
                </div>
                <span>Like ${reactCount.length}</span>`;
            } else {
                await pressedLike(postId, "LIKE");
                await new Promise(resolve => setTimeout(resolve, 200));
                const reactCount = await fetchSizes(postId);
                likeButton.innerHTML = `<div class="button_icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
            </div>
            <span>Like ${reactCount.length}</span>`
                likeButton.classList.toggle('active');

                if (likeButton.classList.contains('active')) {
                    likeButton.style.color = "black";
                } else {
                    likeButton.classList.remove('active');
                    likeButton.style.color = "unset";
                }
            }
        });

        likeButton.addEventListener('mouseover', () => {
            likeButton.parentNode.querySelector(".all_likes_wrapper").classList.add('active');
        });

        likeButton.addEventListener('mouseout', () => {
            likeButton.parentNode.querySelector(".all_likes_wrapper").classList.remove('active');
        });

        likeButton.parentNode.addEventListener('mouseover', () => {
            likeButton.parentNode.querySelector(".all_likes_wrapper").classList.add('active');
        });

        likeButton.parentNode.addEventListener('mouseout', () => {
            likeButton.parentNode.querySelector(".all_likes_wrapper").classList.remove('active');
        });

        likeButton.parentNode.querySelectorAll('div').forEach((like_image) => {
            like_image.addEventListener('click', async (event) => {
                let dataTitle = event.currentTarget.dataset.title;
                const postId = likeButton.id;
                await pressedLike(postId, dataTitle);
                await new Promise(resolve => setTimeout(resolve, 200));
                const reactCount = await fetchSizes(postId);
                if (dataTitle === "LIKE") {
                    likeButton.innerHTML = `<div class="button_icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
                        </div>
                        <span>Like ${reactCount.length}</span>`;

                    likeButton.classList.add("active")``
                } else {
                    likeButton.innerHTML = `<img src="/static/assets/img/${dataTitle.toLowerCase()}.png" style="width: 20px; height: 20px" /> ${dataTitle} ${reactCount.length}`;
                }

                if (dataTitle === "LIKE") {
                    likeButton.style.color = "black";
                } else if (dataTitle === "LOVE") {
                    likeButton.style.color = "#EC2D50";
                } else if (dataTitle === "CARE" || dataTitle === 'HAHA' || dataTitle === "WOW" || dataTitle === "SAD") {
                    likeButton.style.color = "#FAC551";
                } else {
                    likeButton.style.color = "#E24E05";
                }

                likeButton.parentNode.querySelector(".all_likes_wrapper").classList.remove("active");
            });
            like_image.addEventListener('click', (event) => {
                event.stopPropagation();
            });
        });
    });
}


async function getEvents(){
    let communityId = localStorage.getItem('communityIdForDetailPage')
    isFetchingForEvent = true
    let rows =''
    let data = await fetch(`/api/community/getEventsForCommunityDetailPage/${communityId}/${currentPageForEvent}`,{
        method : 'GET'
    })
    let response = await data.json()
    isFetchingForEvent = false
    let row = ''
    console.log(response)
    if(response.length===0){
        hasMoreForEvent = false
        displayNoPostMessage()
    }else{
        for(const r of response){
            let ug = r.user_group !== null ? r.user_group : null
            let gp = ug !== null ? ug.community : null 
            let gpName = gp !== null ? gp.name : null
            let CommunityName = gpName === null ? '' : `<span class="font-monospace d-block badge rounded-pill bg-dark">${gpName} <i class="fa-solid fa-users text-white" style="margin-top:3px;"></i></span>
            `
            let createdTime = await timeAgo(new Date(r.created_date))
            let expired = ''
            if(new Date()>new Date(r.end_date)){
                expired=`
                
    <div class="alert alert-danger d-flex align-items-center" style=" width:265px; position: absolute; top: 135px;  z-index: 1;" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div>
    <i class="fa-solid fa-triangle-exclamation"></i>
    EVENT IS EXPIRED
    </div>
    </div>
                
                `
            }
            const reactCountForEvent = await fetchReactCountForEvent(r.id);
            console.log('length',reactCountForEvent.length);
            const reactTypeForEvent = await fetchReactTypeForEvent(r.id);
            let likeButtonContent = '';
            if (reactTypeForEvent === "LIKE") {
                likeButtonContent = `<div class="button_icon1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
    </div>
            <span  style="color: black;">LIKE ${reactCountForEvent.length}</span>`
                ;
            } else if (reactTypeForEvent === "LOVE") {
                likeButtonContent = `<img src="/static/assets/img/love.png" alt="Love" style="width: 20px; height: 20px"/>
               <span>LOVE ${reactCountForEvent.length}</span>`;
            } else if (reactTypeForEvent === "CARE") {
                likeButtonContent = `<img src="/static/assets/img/care.png" alt="Care" style="width: 20px; height: 20px" />
                      <span>CARE ${reactCountForEvent.length}</span>`;
            } else if (reactTypeForEvent === "ANGRY") {
                likeButtonContent = `<img src="/static/assets/img/angry.png" alt="Angry" style="width: 20px; height: 20px" />
                     <span>ANGRY ${reactCountForEvent.length}</span>`;
            } else if (reactTypeForEvent === "HAHA") {
                likeButtonContent = `<img src="/static/assets/img/haha.png" alt="Haha" style="width: 20px; height: 20px" />
                  <span>HAHA ${reactCountForEvent.length}</span>`;
            } else if (reactTypeForEvent === "SAD") {
                likeButtonContent = `<img src="/static/assets/img/sad.png" alt="Sad" style="width: 20px; height: 20px" />
        <span>SAD ${reactCountForEvent.length}</span>`;
            } else if (reactTypeForEvent === "WOW") {
                likeButtonContent = `<img src="/static/assets/img/wow.png" alt="Wow" style="width: 20px; height: 20px" />
                    <span>WOW ${reactCountForEvent.length}</span>`;
            } else {
                likeButtonContent = `<div class="button_icon1">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/></svg>
            </div>
            <span>Like ${reactCountForEvent.length}</span>`
            }

            let photo = r.photo === null ? '/static/assets/img/eventImg.jpg' : r.photo
            let startDate = new Date(r.start_date)
            let startDay = startDate.getDate()
            let startMonth = startDate.getMonth()+1
            let startYear = startDate.getFullYear()
            let startHours = startDate.getHours()
            let startMinutes = startDate.getMinutes()
            let endDate = new Date(r.end_date)
            let endDay = endDate.getDate()
            let endMonth = endDate.getMonth()+1
            let endYear = endDate.getFullYear()
            let endHours = endDate.getHours()
            let endMinutes = endDate.getMinutes()
            let formattedStartDate = `${startDay} / ${startMonth} / ${startYear}  `;
            let formattedEndDate = `${endDay} / ${endMonth} / ${endYear}  `
            let rows =   `
        
            <div class="post" id="delete-event-section-${r.id}">
            <div class="post" id="delete-event-section-${r.id}">
            <div class="post-top" style="max-width:500px; justify-content:space-between;">

            <div class="d-flex">

                <div>
                <img src="${r.user.photo}" alt="" style="width:50px; height:50px; border-radius:20px;">
                </div>
                <div class="post-info" style="width:100px;">

                <p class="name font-monospace" style="margin-bottom:3px;">${r.user.name}</p>
                ${CommunityName}
                <span class="time font-monospace">${createdTime}</span>

            </div>
            </div>`
            let user = await checkEventOwnerOrAdmin(r.id)
            console.log(user)
            if(user === 'ADMIN' || user === 'OWNER'){
                   rows+= `<div class="dropdown ">
                        <div class="  " onclick="getEventDetail(${r.id})" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-ellipsis-h "></i>
                        </div>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">`
                          if(user === 'OWNER'){  rows+=`<li><a class="dropdown-item"  data-bs-toggle="offcanvas" data-bs-target="#eventEditOffcanvas">Edit</a></li>`}
                          rows+=  `<li><a class="dropdown-item" data-bs-toggle="modal"   data-bs-target="#deleteEventAsk${r.id}" >Delete Post</a></li>
                        </ul>
                    </div>`}

                rows+=`</div>

                <!-- Modal -->
                <div class="modal fade" id="deleteEventAsk${r.id}" tabindex="-1" aria-labelledby="deleteEventAsk${r.id}" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body font-monospace fw-normal">
                      Are you sure do you want to delete this post ?
                      <div class="d-flex" style="margin-left:300px; margin-top:30px;">
                      <button data-bs-dismiss="modal" class="btn btn-success"><i class="fa-solid fa-xmark"></i></button>
                      <button onclick="deleteEvent(${r.id})" data-bs-dismiss="modal" class="btn btn-danger"><i class="fa-solid fa-check"></i></button>
                      </div>
                      </div>

                    </div>
                  </div>
                </div>


            <div id="event-update-section-${r.id}">
            <div class=" post-content-${r.id}" data-bs-toggle="modal" data-bs-target="#searchPost" >
                <div class="card" style="width: 30rem;  margin-left:12px ;">
                    <div class="card-body">
                        <h5 class="card-title">${r.title}</h5>
                        <div class="d-flex align-items-start">
                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button class="nav-link active  " id="v-${r.id}-photo-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-photo" type="button" role="tab" aria-controls="v-${r.id}-photo" aria-selected="true"><i class="fa-solid fa-image"></i>  </button>
                                <button class="nav-link  " id="v-${r.id}-about-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-about" type="button" role="tab" aria-controls="v-${r.id}-about" aria-selected="false"><i class="fa-solid fa-circle-info"></i>  </button>
                                <button class="nav-link" id="v-${r.id}-location-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-location" type="button" role="tab" aria-controls="v-${r.id}-location" aria-selected="false"><i class="fa-solid fa-location-dot"></i> </button>
                                <button class="nav-link" id="v-${r.id}-date-tab" data-bs-toggle="pill" data-bs-target="#v-${r.id}-date" type="button" role="tab" aria-controls="v-${r.id}-date" aria-selected="false"><i class="fa-solid fa-clock"></i></button>
                            </div>
                            <div class="tab-content" id="v-${r.id}-tabContent">
                                <div class="tab-pane fade" id="v-${r.id}-about" role="tabpanel" aria-labelledby="v-${r.id}-about-tab">
                                    <div class="text-center lh-sm font-monospace">
                                        ${r.description}
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-${r.id}-location" role="tabpanel" aria-labelledby="v-${r.id}-location-tab">
                                    <div class="text-center fs-5 fw-bold fst-italic font-monospace ml-3">
                                        <div class="ml-5  mt-5 text-danger">${r.location}</div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-${r.id}-date" role="tabpanel" aria-labelledby="v-${r.id}-date-tab">
                                    <div class="text-center fs-6 fw-bold mt-3  pl-2 font-monospace">
                                        <div class="mt-2 ml-5 d-flex"><div class="text-secondary"> START </div> <i class="fa-solid fa-play text-danger mx-1"></i></br></div><div class="fst-italic"> ${formattedStartDate}</div></br>
                                        <div class="mt-2 ml-5 d-flex"><div class="text-secondary"> END </div> <i class="fa-solid fa-play text-danger mx-1"></i><br></div><div class="fst-italic"> ${formattedEndDate}</div>
                                    </div>
                                </div>
                                <div class="tab-pane fade show active" id="v-${r.id}-photo" role="tabpanel" aria-labelledby="v-${r.id}-photo-tab"><b class="p-2"><img src="${r.photo}" style="width:250px; height:200px; border-radius:20px"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           <div class="post-bottom" style="justify-content: center; margin-top: -40px">
<div class="button_wrapper1">
    <div class="all_likes_wrapper1">
        <div data-title="LIKE">
            <img src="/static/assets/img/like.png" alt="Like" />
        </div>
        <div data-title="LOVE">
            <img src="/static/assets/img/love.png" alt="Love" />
        </div>
        <div data-title="CARE">
            <img src="/static/assets/img/care.png" alt="Care" />
        </div>
        <div data-title="HAHA">
            <img src="/static/assets/img/haha.png" alt="Haha" />
        </div>
        <div data-title="WOW">
            <img src="/static/assets/img/wow.png" alt="Wow" />
        </div>
        <div data-title="SAD">
            <img src="/static/assets/img/sad.png" alt="Sad" />
        </div>
        <div data-title="ANGRY">
            <img src="/static/assets/img/angry.png" alt="Angry" />
        </div>
    </div>
            <button class="like_button1" id="${r.id}">
                ${likeButtonContent}
            </button>
          </div>

            </div>
        </div>
        `;

            row+= rows
        };

        let range = document.createRange();
        let fragment = range.createContextualFragment(row);

        eventDiv.appendChild(fragment)
        const likeButtons = document.querySelectorAll(".like_button1");
        likeButtons.forEach(likeButton => {
            likeButton.addEventListener('click', async (event) => {
                const eventId = likeButton.id;
                const currentReactType = await fetchReactTypeForEvent(eventId);
                console.log('sdd', currentReactType);
                if ((currentReactType !== null) && (currentReactType !=="OTHER")) {
                    await removeReactionForEvent(eventId);
                    const reactCountForButtonEvent = await fetchReactCountForEvent(eventId);
                    console.log('FOr other',reactCountForButtonEvent.length)
                    console.log("Press previous icon")
                    likeButton.innerHTML = `<div class="button_icon1">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/></svg>
                </div>
                <span>Like ${reactCountForButtonEvent.length}</span>`;
                } else {
                    await pressedLikeForEvent(eventId, "LIKE");
                    await new Promise(resolve => setTimeout(resolve, 200));
                    const reactCountForButtonEvent = await fetchReactCountForEvent(eventId);
                    console.log('FOr Like',reactCountForButtonEvent.length)
                    console.log("Press Like Button for event")
                    likeButton.innerHTML = `<div class="button_icon1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
            </div>
            <span>Like ${reactCountForButtonEvent.length}</span>`
                    likeButton.classList.toggle('active');

                    if (likeButton.classList.contains('active')) {
                        likeButton.style.color = "black";
                    } else {
                        likeButton.classList.remove('active');
                        likeButton.style.color = "unset";
                    }
                }
            });

            likeButton.addEventListener('mouseover', () => {
                likeButton.parentNode.querySelector(".all_likes_wrapper1").classList.add('active');
            });

            likeButton.addEventListener('mouseout', () => {
                likeButton.parentNode.querySelector(".all_likes_wrapper1").classList.remove('active');
            });

            likeButton.parentNode.addEventListener('mouseover', () => {
                likeButton.parentNode.querySelector(".all_likes_wrapper1").classList.add('active');
            });

            likeButton.parentNode.addEventListener('mouseout', () => {
                likeButton.parentNode.querySelector(".all_likes_wrapper1").classList.remove('active');
            });

            likeButton.parentNode.querySelectorAll('div').forEach((like_image1) => {
                like_image1.addEventListener('click', async (event) => {
                    let dataTitle = event.currentTarget.dataset.title;
                    const eventId = likeButton.id;
                    await pressedLikeForEvent(eventId, dataTitle);
                    await new Promise(resolve => setTimeout(resolve, 200));
                    const reactCountForButtonEvent = await fetchReactCountForEvent(eventId);
                    if (dataTitle === "LIKE") {
                        likeButton.innerHTML = `<div class="button_icon1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
                        </div>
                        <span>Like ${reactCountForButtonEvent.length}</span>`;

                        likeButton.classList.add("active")
                    } else {
                        likeButton.innerHTML = `<img src="/static/assets/img/${dataTitle.toLowerCase()}.png" style="width: 20px; height: 20px" /> ${dataTitle} ${reactCountForButtonEvent.length}`;
                    }

                    if (dataTitle === "LIKE") {
                        likeButton.style.color = "black";
                    } else if (dataTitle === "LOVE") {
                        likeButton.style.color = "#EC2D50";
                    } else if (dataTitle === "CARE" || dataTitle === 'HAHA' || dataTitle === "WOW" || dataTitle === "SAD") {
                        likeButton.style.color = "#FAC551";
                    } else {
                        likeButton.style.color = "#E24E05";
                    }

                    likeButton.parentNode.querySelector(".all_likes_wrapper1").classList.remove("active");
                });
                like_image1.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
            });
        });

    }

}


async function getPolls(){
    let communityId =  localStorage.getItem('communityIdForDetailPage')
    isFetchingForPoll = true
    let polls = document.getElementById('polls');
    let pollTab = document.getElementById('polls')

    let data = await fetch(`/api/community/getPollsForCommunityDetailPage/${communityId}/${currentPageForPoll}`,{
        method : 'GET'
    })
    let response = await data.json()
    isFetchingForPoll = false
    if(response.length===0){
        hasMoreForPoll = false
        displayNoPostMessage()
    }else{
    console.log(response)
    let rows = ''
    for (let r of response) {
        let ug = r.user_group !== null ? r.user_group : null
        let gp = ug !== null ? ug.community : null 
        let gpName = gp !== null ? gp.name : null
        let CommunityName = gpName === null ? '' : `<span class="font-monospace d-block badge rounded-pill bg-dark">${gpName} <i class="fa-solid fa-users text-white" style="margin-top:3px;"></i></span>
        `
    let expired = ''
    if(new Date()>new Date(r.end_date)){
        expired=`

<div class="alert alert-danger d-flex align-items-center" style=" width:265px; position: absolute; top: 55px; left:120px;  z-index: 1;" role="alert">
<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
<div>
<i class="fa-solid fa-triangle-exclamation"></i>
POLL IS EXPIRED
</div>
</div>

        `
    }
    let hidden = await checkVoted(r.id) === false ? '' : 'hidden'
    let notHidden = await checkVoted(r.id) === false ? 'hidden' : ''
    let row = ''
    let created = new Date(r.created_date)
    let now = new Date()
    let createdTime = await timeAgo(new Date(r.created_date))

    row += `
    <div class="post" id="pollPostDiv-${r.id}">

    <div class="post-top" style="max-width:500px; justify-content:space-between;">

    <div class="d-flex">

        <div>
        <img src="${r.user.photo}" alt="" style="width:50px; height:50px; border-radius:20px;">
        </div>
        <div class="post-info" style="width:100px;">

        <p class="name font-monospace" style="margin-bottom:3px;">${r.user.name}</p>
        ${CommunityName}
        <span class="time font-monospace">${createdTime}</span>

    </div>

    </div>`


    let user = await checkEventOwnerOrAdmin(r.id)
    if(user === 'ADMIN' || user === 'OWNER'){
            row+=`<div class="dropdown ">
                <div class="  " onclick="getPollEventDetail(${r.id})" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-ellipsis-h "></i>
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">`
                   if(user === 'OWNER'){ row+=`  <li><a class="dropdown-item"  data-bs-toggle="offcanvas" data-bs-target="#pollEditOffcanvas">Edit</a></li>`}
                    row+=`<li><a class="dropdown-item" data-bs-toggle="modal"   data-bs-target="#deletePollAsk${r.id}" >Delete Post</a></li>
                </ul>
            </div>`}
        row+=`</div>

        <!-- Modal -->
        <div class="modal fade" id="deletePollAsk${r.id}" tabindex="-1" aria-labelledby="deletePollAsk${r.id}" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body font-monospace fw-normal">
              Are you sure do you want to delete this post ?
              <div class="d-flex" style="margin-left:300px; margin-top:30px;">
              <button data-bs-dismiss="modal" class="btn btn-success"><i class="fa-solid fa-xmark"></i></button>
              <button onclick="deleteEvent(${r.id})" data-bs-dismiss="modal" class="btn btn-danger"><i class="fa-solid fa-check"></i></button>
              </div>
              </div>
            </div>
          </div>
        </div>
    <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-about-tab-${r.id}" data-bs-toggle="tab" data-bs-target="#nav-about-${r.id}" type="button" role="tab" aria-controls="nav-about-${r.id}" aria-selected="true"> <i class="fa-solid fa-info"></i>  About</button>
      <button class="nav-link" id="nav-vote-tab-${r.id}" data-bs-toggle="tab" data-bs-target="#nav-vote-${r.id}" type="button" role="tab" aria-controls="nav-vote-${r.id}" aria-selected="false"> <i class="fa-solid fa-check-to-slot"></i> Vote</button>
    </div>
  </nav>
    <div id="poll-post-update-${r.id}" class="post-content" data-bs-toggle="modal"  >
    <div id="poll-post-update-content-${r.id}" class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        ${expired}
        <img src="${r.photo}" style="max-width:170px; postion:relative;" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body" style="max-height: 200px; overflow-y: auto;">
        <div class="tab-content" id="nav-tabContent">
<div class="tab-pane fade show active" id="nav-about-${r.id}" role="tabpanel" aria-labelledby="nav-about-tab-${r.id}">

<h5 class="card-title align-middle font-monospace">${r.title}</h5>
<p class="card-text font-monospace">${r.description}</p>

</div>
<div class="tab-pane fade" id="nav-vote-${r.id}" role="tabpanel" aria-labelledby="nav-vote-tab-${r.id}">


        `
    let totalVotes = 0;
    for (let v of r.voteOptions) {
        let count = await getCount(v.id);
        totalVotes += count;
    }
    for (let v of r.voteOptions) {
        let count = await getCount(v.id);
        let percentage = totalVotes === 0 ? 0 : (count / totalVotes) * 100;
        row += `
    <div class="vote-option d-flex mt-1">
    <div class="d-block">
    <div class="font-monospace ">${v.type}</div>
            <div class="d-flex">
            <div class="progress" style="height: 16px; width: 170px;">

                <div class="progress-bar bg-primary" id="${v.id}-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">${Math.floor(percentage)}%</div>
            </div>`
            if(new Date()<new Date(r.end_date)){
        row += ` <button id="vote-btn-${r.id}" class="${hidden} give-btn" onclick="voteVoteOption(${v.id},${r.id})"><i class="fa-solid fa-hand" style="width:7px; margin-right:11px;"></i></button> `;
            }
        let yes = await checkVotedMark(v.id)
        let markIcon = 'hidden'
        if(yes === true){
            markIcon = ''
        }
        console.log(yes)


        row += ` <div id="mark-id-${v.id}" class="${markIcon}"> <i class="fa-regular fa-circle-check"></i> </div>
            </div>
            </div>
             `



        row+=`</div>`

    }
    if(new Date()<new Date(r.end_date)){
    row += `   <button id="unvote-btn-${r.id}" class="${notHidden} erase-btn" onclick = "unVote(${r.id})"><i class="fa-solid fa-eraser"></i></button> `
    }
    row+=`</div>
</div>
      </div>
</div>
</div>
</div>


</div>

<div class="post-bottom">
<div class="action" style="height: 50px">
<div class="button_wrapper">
<div class="all_likes_wrapper">
  <div data-title="LIKE">
      <img src="/static/assets/img/like.png" alt="Like" />
  </div>
  <div data-title="LOVE">
      <img src="/static/assets/img/love.png" alt="Love" />
  </div>
  <div data-title="CARE">
      <img src="/static/assets/img/care.png" alt="Care" />
  </div>
  <div data-title="HAHA">
      <img src="/static/assets/img/haha.png" alt="Haha" />
  </div>
  <div data-title="WOW">
      <img src="/static/assets/img/wow.png" alt="Wow" />
  </div>
  <div data-title="SAD">
      <img src="/static/assets/img/sad.png" alt="Sad" />
  </div>
  <div data-title="ANGRY">
      <img src="/static/assets/img/angry.png" alt="Angry" />
  </div>
</div>
<button class="like_button" id=" ">
</button>
</div>
</div>
<div class="action">
    <i class="fa-regular fa-comment"></i>
    <span onclick="pressedComment()"  data-bs-toggle="modal" data-bs-target="#commentStaticBox">Comment  </span>
</div>
<div class="action">
    <i class="fa fa-share"></i>
    <span>Share</span>
</div>
</div>
</div>
    `
    rows+=row



}
let range = document.createRange();
let fragment = range.createContextualFragment(rows);
while (polls.children.length > 0) {
    polls.children[0].remove();
}
pollTab.appendChild(fragment)
await removeCat()
if(fragment){
    for(let r of response){
        await updateVotePercentage(r.voteOptions)
    }
}
}

}




async function startUp(){
    let communityId = localStorage.getItem('communityIdForDetailPage')
    let community = await fetch(`/api/community/getCommunity/${communityId}`)
    let data = await community.json()
    console.log(data)
    document.getElementById('communityImage').src = data.image
    document.getElementById('communityName').textContent = data.name
    document.getElementById('communityMembers').textContent = 10
        console.log("HI Group",communityId)
        await checkGroupForLoginUser(communityId);
         await checkGroupForMessagingSystem(communityId);

}


document.body.addEventListener('hidden.bs.modal', async function (event) {
    await videoObserver()
  });


 const getAllUsers = async () => {
     const url = '/api/community/users';
     const data = await fetch(url);
     if (data.ok) {
         const dataResponse = await data.json();
         console.log('all users', dataResponse);
         return dataResponse;
     }
 };

 const getUsersByCommunityId = async (id) => {
     const url = `/api/community/user/${id}`;
     const data = await fetch(url);
     if (data.ok) {
         const dataResponse = await data.json();
         console.log('community users', dataResponse);
         return dataResponse;
     }
 };
 document.getElementById('userSearch').addEventListener('input', function() {
     const searchValue = this.value.toLowerCase();
     const usersList = document.getElementById('usersList');
     const allUsers = document.querySelectorAll('#usersList #container');

     allUsers.forEach(userContainer => {
         const userNameElement = userContainer.querySelector('.user-list-span');
         if (userNameElement) {
             const userName = userNameElement.textContent.toLowerCase();
             if (userName.includes(searchValue)) {
                 userContainer.style.display = 'block';
             } else {
                 userContainer.style.display = 'none';
             }
         }
     });
 });


 async function populateCreateGroupFormForInvitation() {
     document.getElementById('communityId1').value = communityId;

     const allUsers = await getAllUsers();
     const communityUsers = await getUsersByCommunityId(communityId);
     const usersNotInCommunity = allUsers.filter(user => !communityUsers.some(communityUser => communityUser.id === user.id));
     const usersList = document.getElementById('usersList');

     usersList.innerHTML = '';


     usersNotInCommunity.forEach(user => {

         const userContainer = document.createElement('div');
         userContainer.id = "container";
         userContainer.style.padding = '20px';
         userContainer.style.borderRadius = '10px';
         userContainer.style.marginLeft = "280px";

         const container=document.createElement('div');
         container.id="container1";
         container.style.marginBottom="80px";

         const photoSpan = document.createElement('span');
         if (user.photo) {
             const userPhoto = document.createElement('img');
             userPhoto.src = user.photo;
             userPhoto.alt = "User's Photo";
             photoSpan.appendChild(userPhoto);
         } else {
             const userPhoto = document.createElement('img');
             userPhoto.src = '/assets/img/default-logo.png';
             userPhoto.alt = "User's Photo";
             photoSpan.appendChild(userPhoto);
         }

         const nameSpan = document.createElement('span');
         nameSpan.classList.add('user-list-span')
         nameSpan.textContent = user.name;

         const checkboxInput = document.createElement('input');
         checkboxInput.type = "checkbox";
         checkboxInput.id = `_checkbox${user.id}`;
         checkboxInput.name = "userIds";
         checkboxInput.value = user.id;
         if (communityUsers.some(communityUser => communityUser.id === user.id)) {
             checkboxInput.checked = true;
             checkboxInput.disabled = true;
         }

         const checkboxLabel = document.createElement('label');
         checkboxLabel.htmlFor = `_checkbox${user.id}`;
         checkboxLabel.className = "form-check-label";
         checkboxLabel.style.marginLeft = "390px";

         const tickMarkDiv = document.createElement('div');
         tickMarkDiv.className = `tick_mark`;

         checkboxLabel.appendChild(tickMarkDiv);
         userContainer.appendChild(photoSpan);
         container.appendChild(photoSpan);
         userContainer.appendChild(nameSpan);
         container.appendChild(nameSpan);
         userContainer.appendChild(container);
         userContainer.appendChild(checkboxInput);
         userContainer.appendChild(checkboxLabel);
         usersList.appendChild(userContainer);
     });


     $('#invitationFormModal').modal('show');
 }
 document.getElementById('inviteFriendBtn').addEventListener('click', async (e) => {
     // e.preventDefault();

     const formData = new FormData(document.getElementById('inviteForm'));
     const inviteDto = Object.fromEntries(formData.entries());
     const data = await fetch('/user/invitationSend',{
         method:'PUT',
         // headers: {
         //     'Content-Type' : ' application/json'
         // },
         // body:JSON.stringify(inviteDto)
         body:formData
     })
     if (data.ok) {
         const result = await data.json();
         document.getElementById('invitationMessage').innerHTML = result.message;
         $('#invitationFormModal').modal('hide');
     } else {
         document.getElementById('invitationMessage').innerHTML = 'Error creating community';
     }
 });

 document.getElementById('inviteModalCloseBtn').addEventListener('click', function() {
     $('#invitationFormModal').modal('hide');
 });


 const distinguishMembers = async (id) => {
    let data = await fetch(`/user/checkIfUserIsAMemberOrOwnerOrAdminOfAGroup/${id}`)
    let response = await data.json()
    if(response[0] === 'ADMIN'){
        return 'ADMIN'
    }
    if(response[0] === 'OWNER'){
        return 'OWNER'
    }
    return 'MEMBER'
}



const sendMentionNotification = async (mentionedUsers,id) => {
    if (mentionedUsers.length > 0) {
        console.log("get", mentionedUsers);
        const myObj = {
            postId:id,
            userId:loginUser,
            users:mentionedUsers
        }
        stompClient.send('/app/mention-notification', {}, JSON.stringify(myObj));
    }
};


document.getElementById('labelForEventStartDate').addEventListener('click',()=>{
    console.log('here we clicked')
    console.log(document.getElementById('start_date'))
    const startDateInput = document.getElementById('start_date');
    startDateInput.style.display = 'block';
    if (startDateInput.offsetWidth === 0 || startDateInput.offsetHeight === 0) {
      startDateInput.focus();
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      startDateInput.dispatchEvent(event);
    } 
})

document.getElementById('labelForEventEndDate').addEventListener('click',()=>{
    const startDateInput = document.getElementById('end_date');
    startDateInput.style.display = 'block';
    if (startDateInput.offsetWidth === 0 || startDateInput.offsetHeight === 0) {
      startDateInput.focus();
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      startDateInput.dispatchEvent(event);
    }
})

document.getElementById('labelForPollStartDate').addEventListener('click',()=>{
    console.log('here we clicked')
    console.log(document.getElementById('poll_start_date'))
    const startDateInput = document.getElementById('poll_start_date');
    startDateInput.style.display = 'block';
    if (startDateInput.offsetWidth === 0 || startDateInput.offsetHeight === 0) {
      startDateInput.focus();
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      startDateInput.dispatchEvent(event);
    } 
})

document.getElementById('labelForPollEndDate').addEventListener('click',()=>{
    console.log('here we clicked')
    console.log(document.getElementById('poll_end_date'))
    const startDateInput = document.getElementById('poll_end_date');
    startDateInput.style.display = 'block';
    if (startDateInput.offsetWidth === 0 || startDateInput.offsetHeight === 0) {
      startDateInput.focus();
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      startDateInput.dispatchEvent(event);
    } 
})

document.getElementById('labelForEventPhoto').addEventListener('click',()=>{
    document.getElementById('eventPhotoFile').click()
})

document.getElementById('labelForEventUpdatePhoto').addEventListener('click',()=>{
    document.getElementById('updateEventPhoto').click()
})

async function openFileBox(){
    console.log('here here')
    document.getElementById('updatePollEventPhoto').click()
}

document.getElementById('labelForPoll').addEventListener('click',()=>{
    console.log(document.getElementById('labelForPoll'))
    console.log(document.getElementById('updatePollEventPhoto'))
    document.getElementById('updatePollEventPhoto').click()
})

async function setToNormal() {
    cat.classList.remove('hidden')
    mark.classList.add('hidden')
}



const validateDates = () => {
    console.log('validate');
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;
    
    if (startDate && endDate && startDate > endDate) {
        document.getElementById('start_date').value = '';
        document.getElementById('end_date').value = ''; 
        alert('Start date must be earlier than end date');
    }
};


const pollValidateDates = () => {
    console.log('validate');
    const startDate = document.getElementById('poll_start_date').value;
    const endDate = document.getElementById('poll_end_date').value;
    
    if (startDate && endDate && startDate > endDate) {
        document.getElementById('poll_start_date').value = '';
        document.getElementById('poll_end_date').value = ''; 
        alert('Start date must be earlier than end date');
    }
};

document.getElementById('start_date').addEventListener('change', validateDates);
document.getElementById('end_date').addEventListener('change', validateDates);


document.getElementById('poll_start_date').addEventListener('change', pollValidateDates);
document.getElementById('poll_end_date').addEventListener('change', pollValidateDates);

let startDate = document.getElementById('start_date')
let endDate = document.getElementById('end_date')


