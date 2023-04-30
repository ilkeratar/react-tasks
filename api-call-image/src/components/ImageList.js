import ImageItem from "./Imageitem";

function ImageList({imagesPlaceholder}) {
    return (
    <div className="imageList">
        {imagesPlaceholder.map((image,index)=>{
        return <ImageItem key={index} props={image}/>
        })}
    </div>
    );
}

export default ImageList;