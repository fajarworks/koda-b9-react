import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, removeData } from "../redux/slices/surveyslice";

function SurveyPenonton() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.survey);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = Object.fromEntries(new FormData(e.target))
    const form = new FormData(e.target);
    const data = {
      name: form.get("name"),
      age: form.get("age"),
      gender: form.get("gender"),
      hobbies: form.get("hobbies"),
      genres: form.getAll("genre"),
    };

    console.log(data);

    dispatch(addData(data));
    e.target.reset();
  };


  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full p-6 bg-orange-100">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nama</label>
            <input
              className="w-full border border-gray-300"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="age">Umur</label>
            <input
              className="w-full border border-gray-300"
              type="number"
              id="age"
              name="age"
            />
          </div>

          <div>
            <p>Jenis Kelamin</p>
            <input
              className=""
              type="radio"
              id="male"
              name="gender"
              value="male"
            />
            <label htmlFor="male">Laki Laki</label>
            <input
              className=""
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
            <label htmlFor="female">Perempuan</label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="hobbies">Apakah anda hobi menonton film ?</label>
            <select
              className="w-30 border-gray-500 border"
              name="hobbies"
              id="hobbies"
            >
              <option value="">silahkan pilih</option>
              <option value="iya">Iya</option>
              <option value="enggak">Enggak</option>
            </select>
          </div>
          <div className="">
            <p>Genre film yang disukai</p>
            <label htmlFor="drama">Drama</label>
            <input type="checkbox" id="drama" name="genre" value="drama" />
            <label htmlFor="action">action</label>
            <input type="checkbox" id="action" name="genre" value="action" />
            <label htmlFor="science-fiction">science-fiction</label>
            <input
              type="checkbox"
              id="science-fiction"
              name="genre"
              value="science-fiction"
            />
            <label htmlFor="comedy">comedy</label>
            <input type="checkbox" id="comedy" name="genre" value="comedy" />
            <label htmlFor="romance">romance</label>
            <input type="checkbox" id="romance" name="genre" value="romance" />
          </div>
          <button className="w-full border bg-orange-600 text-orange-100">
            Submit
          </button>
        </form>
      </div>

      <div>
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full min-w-[700px] text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-semibold">No</th>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Umur</th>
                <th className="px-6 py-4 font-semibold">Jenis Kelamin</th>
                <th className="px-6 py-4 font-semibold">Hobbies</th>
                <th className="px-6 py-4 font-semibold">Genres</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {state.data?.map((item, idx) => (
                <tr
                  key={idx}
                  className="bg-white hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-500">
                    {idx + 1}
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-900">
                    {item.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {item.age}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {item.gender}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {item.hobbies}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {item.genres.join(", ")}
                  </td>
                  <td> <button type="button" onClick={()=>{dispatch(removeData(item.name))}}>delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default SurveyPenonton;
