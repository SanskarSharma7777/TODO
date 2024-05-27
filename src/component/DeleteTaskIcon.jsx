export default function DeleteTaskIcon({ hidden }) {
    if (hidden)
        return <i className="fa fa-trash ml-2" aria-hidden="true"></i>
    else
        return null;
}