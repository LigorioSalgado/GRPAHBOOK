import Author from '../src/schemas/Authors';
import Books from '../src/schemas/Books';


export default () => {
    Books.create([
        {
            'name':"IT",
            'prologue':"During a heavy rainstorm in Derry, Maine, six-year-old George 'Georgie' Denbrough is chasing a paper boat that was gifted to him by his brother, Bill, down a gutter. The boat is washed down a storm drain and Georgie peers in, seeing a pair of glowing yellow eyes. Georgie is confronted by a man dressed in a silver clown suit who introduces himself as 'Mr. Bob Gray', a.k.a. 'Pennywise the Dancing Clown'. Pennywise offers Georgie a balloon which he cautiously refuses. The clown then entices Georgie to reach into the drain to retrieve his boat and severs his arm, causing his death.",
            'isbn':"0-670-81302-8",
            'num_pages' :1138,
        
            'cover':"https://upload.wikimedia.org/wikipedia/en/5/5a/It_cover.jpg",
            
            'autor':"5ac4629769dfe5222d4caf2b"

        },
        {
            'name':"The Shining ",
            'prologue':"The Shining mainly takes place in the fictional Overlook Hotel, an isolated, haunted resort located in the Colorado Rockies. The history of the hotel, which is described in backstory by several characters, includes the deaths of some of its guests and of former winter caretaker Delbert Grady, who succumbed to cabin fever and killed his family and himself.",
            'isbn':"978-0-385-12167-5",
            'num_pages' :447,
        
            'cover':"https://upload.wikimedia.org/wikipedia/en/4/4c/Shiningnovel.jpg",
            
            'autor':"5ac4629769dfe5222d4caf2b"

        },
        {
            'name':"I,Robot",
            'prologue':"Dr. Susan Calvin tells each story to a reporter (who serves as the narrator) in the 21st century. Although the stories can be read separately, they share a theme of the interaction of humans, robots, and morality, and when combined they tell a larger story of Asimov's fictional history of robotics. Several of the stories feature the character of Dr. Calvin, chief robopsychologist at U.S. Robots and Mechanical Men, Inc., the major manufacturer of robots. Upon their publication in this collection, Asimov wrote a framing sequence presenting the stories as Calvin's reminiscences during an interview with her about her life's work, chiefly concerned with aberrant behaviour of robots and the use of 'robopsychology' to sort out what is happening in their positronic brain. The book also contains the short story in which Asimov's Three Laws of Robotics first appear, which had large influence on later science fiction and had impact on thought on ethics of artificial intelligence as well. Other characters that appear in these short stories are Powell and Donovan, a field-testing team which locates flaws in USRMM's prototype models.",
            'isbn':" 0-586-02532-4 ",
            'num_pages' :252,
        
            'cover':"https://upload.wikimedia.org/wikipedia/en/d/d5/I_robot.jpg",
            
            'autor':"5ac4629769dfe5222d4caf2b"

        }


    ])

}