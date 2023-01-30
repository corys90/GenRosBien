
const Tip = (props: any) => {

    return(
        <div style={{display: "flex", justifyContent: "center"}} >
            <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#EEF2F5",
                    width: "fit-content"
                    }} className="rounded-pill">
                <div>
                    <i className="bi bi-exclamation-circle text-primary p-2"></i>
                </div>
                <div >
                    <label className="pe-2">{props.texto}</label>
                </div>
            </div>
        </div>
    );
}

export default Tip;