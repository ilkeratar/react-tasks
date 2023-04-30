function ImageItem({props}) {
    return ( 
    <div>
        <img src={props.urls.small} alt={props.alt_description} className="imageListImg"/>
    </div>
    );
    }

export default ImageItem;