import axios from "axios";

const exportedObject = {
    getUsers:function(){    
        return axios.get("https://randomuser.me/api/?results=20&nat=us");
    }
};

export default exportedObject;


