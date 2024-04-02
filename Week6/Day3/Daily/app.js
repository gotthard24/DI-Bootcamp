class Video{
    constructor(title, uploader, time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of '${this.title}' video`);
    }
}

// let vid1 = new Video("Some Guide", "Vasya", 60)
// vid1.watch()
// let vid2 = new Video("Sport", "Galina", 300)
// vid2.watch()

let videosData = [
    {'title' : 'some 2',
    'uploader' : 'a',
    'time' : 2},

    {'title' : 'some 3',
    'uploader' : 'b',
    'time' : 3},

    {'title' : 'some 4',
    'uploader' : 'c',
    'time' : 4},

    {'title' : 'some 5',
    'uploader' : 'd',
    'time' : 5},

    {'title' : 'some 6',
    'uploader' : 'e',
    'time' : 6}
]

let videos = []

videosData.forEach((item, index) => {
    // let videoName = `video${index}`
    let video = new Video(item.title, item.uploader, item.time);
    video.watch()
    videos.push(video)
    // videos[videoName] = video
});

console.log(videos);