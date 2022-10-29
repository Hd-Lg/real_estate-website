import axios from "axios";

// headers: {
//     'X-RapidAPI-Key': '482a65596cmshb1a13250ab84f1bp17795ejsnffbcfe11196a',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//    }

export const baseUrl = "https://bayut.p.rapidapi.com";

export async function fetchApi(url) {
    const { data } = await axios.get(url, {
        headers: {
            "X-RapidAPI-Key":
                "482a65596cmshb1a13250ab84f1bp17795ejsnffbcfe11196a",
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
    });
    return data;
}
