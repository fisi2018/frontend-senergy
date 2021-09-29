export const getDateFormat=(date)=>{
    const newDate=new Date(date);
        const formatDate=newDate.toLocaleDateString();

        return formatDate;
}