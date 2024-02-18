import axios from 'axios';
import { useEffect,useState } from 'react'

const AdminPanel = () => {
    const [BName, setBName] = useState('');
    const [PName, setPName] = useState('');
    const [Image, setImage] = useState('');
    const [Price, setPrice] = useState('');
    const [Description, setDescription] = useState('');

    function showalert(){
        var myText ="Done??";

        if(confirm(myText)){
            location.reload();
        }
    }

    const addProducts = async (e) => {
        e.preventDefault();

        try{
            await axios.post('/api/createProducts',{
                BName,
                PName,
                Image,
                Price,
                Description,

            });
            console.log('Products Uploaded Successfully');
        }
        catch(error){
            console.error("Error adding Products:", error);
        }
    };
  return (
    <div>
        <form onSubmit={addProducts} className='max-w-xl mx-auto my-10 py-8 font-semibold space-y-5 text-xl bg-blue-100 px-4 rounded-xl'>
            <div> 
                <label htmlFor='BName' className='block font-serif mb-2'>Brand Name</label>
                <input
                    type='text'
                    id='BName'
                    placeholder='Siyarams'
                    value={BName}
                    onChange={(e) => setBName(e.target.value)}
                    className='border px-4 w-full py-2 border-gray-400 rounded focus:outline-none focus:border-blue-500 focus:shadow-md'
                />
            </div>
            <div>
                <label htmlFor='PName' className='block font-serif mb-2'>Product Name</label>
                <input 
                    type='text'
                    id='PName'
                    placeholder='Shirt Piece'
                    value={PName}
                    onChange={(e) => setPName(e.target.value)}
                    className='border px-4 w-full py-2 border-gray-400 rounded focus:outline-none focus:border-blue-500 focus:shadow-md'

                />
            </div>
            <div>
                <label htmlFor='Image' className='block font-serif mb-2'>Product Image</label>
                <input
                    type='file'
                    id='Image'
                    placeholder='Image'
                    value={Image}
                    onChange={(e) => setImage(e.target.value)}
                    className='bg-white border px-4 w-full py-2 border-gray-400 rounded focus:outline-none focus:border-blue-500 focus:shadow-md'

                />
            </div>
            <div>
                <label htmlFor='Price' className='block font-serif mb-2'>Price</label>
                <input
                    type='text'
                    id='Price'
                    placeholder='1500'
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='border px-4 w-full py-2 border-gray-400 rounded focus:outline-none focus:border-blue-500 focus:shadow-md'

                />
            </div>
            <div>
                <label htmlFor='Description' className='block font-serif mb-2'>Description</label>
                <textarea
                    type='text'
                    id='Description'
                    placeholder='Length: 100cm'
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='border px-4 w-full py-2 border-gray-400 rounded focus:outline-none focus:border-blue-500 focus:shadow-md'

                />
            </div>
            <div className='text-center'>
                <button
                    // onClick={showalert}
                    type='submit'
                    className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 font-bold'
                >Publish</button>
            </div>
        </form>
    </div>
  )
}

export default AdminPanel
