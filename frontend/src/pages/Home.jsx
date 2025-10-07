import React from "react";
import Item from "../components/Item";


function Home() {
  return (
    <div className="w-3/4">
      {/* <div className="flex px-4 py-3">
        <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#e7eff3] p-1">
          <label
            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-slate-50 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0d171b] text-[#4c809a] text-sm font-medium leading-normal"
          >
            <span className="truncate">Newest First</span>
            <input
              checked={true}
              className="invisible w-0"
              name="sort-order"
              type="radio"
              value="Newest First"
            />
          </label>
          <label
            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-slate-50 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0d171b] text-[#4c809a] text-sm font-medium leading-normal"
          >
            <span className="truncate">Price: Low to High</span>
            <input
              className="invisible w-0"
              name="sort-order"
              type="radio"
              value="Price: Low to High"
            />
          </label>
          <label
            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-slate-50 has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0d171b] text-[#4c809a] text-sm font-medium leading-normal"
          >
            <span className="truncate">Price: High to Low</span>
            <input
              className="invisible w-0"
              name="sort-order"
              type="radio"
              value="Price: High to Low"
            />
          </label>
        </div>
      </div> */}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
        <>
          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuBtInCrUYgPvbhCgTSDfNQSXxM8QQRlcg1s--bLVlc_rv3NfH3HVeEp39y_fnjBzW5es2i_hzIEYwZmEtk--1M10tnJfHU7fn_W36IUHPzRq1Qed_dLUxed-HjDL-AjLczhw6S06JXx1VntqoyvEITtNN1-iULm7LuSiy4UbVf9kSZHaMaoLpwjtqh0wsQnYMO7aSUPMSV7o_9uc8zDdDuwvvVO-LN9hvnDiDWPz8ruac4wqdw8rTO2c9fsZmuFdPfGMIMwF0jpx3c"
            product="Vintage Leather Jacket"
            price="$50"
            location="New York, NY"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCu85R3l8-uqeviaYuu-FD89aGwFELwEy6X2lDJmpasN94MlRovX2rfPC3-9R7GghOaKqGuetvagayie1LZzEudGkZCPBOTu7JEHSKxPng-kTm6hx5S8Pd3Heswv1Rk3-FxEAi6m3JPpbgh869P2k12bHU1nxeLoIIjJycbE3NRIkaRUuYMuXYMi3iXfAMXe4vx9-MqGfSEThYCt9UWEbY695v5b4pQeH8WeKfe-_0Kgn4xWQHVbecMsutueX9DHQmQ6JM5fMkI_qE"
            product="Used PS5 Console"
            price="$399"
            location="Los Angeles, CA"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuAdFsz0Q9lSs0DawNGD8KfT7TEJQLbjhD85WlL5bdq3wGZKUQ5MtOrT0eIwwJNDbRtovZ4qWRmd-LCwO6njZ5DmaJPnh6EZAf2l0eolTjwF_WlAy2-y3-9HyJ93GNmG7CEIkwREll3AImkz7RR60gocSO4abFYqlcbfh7tINA0_KycbtGt9G-BFUtSeakvuHTfKcmDY3UJBB56-xYX7hY1fmHlzh3dobK8KKkq7eFbcwRoFO3KwjnGzjUYftKO0sMfEZ3tbtQtwsog"
            product="Antique Wooden Chair"
            price="$120"
            location="London, UK"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCjC-Idge5qWV1lym6SJNByYlONQxN6d7guDRgdeF3955N8AItdYY7aEz6a7224eLXrMhgnCV2wBrN9Hh_NahmYRX-96p_Rc8rB-5UDA2kazsqiF5gT0MZCm5hkcl5ndxz5wv7XVxGMVU7-U798fIcTD3jSyTO1sye4mxFLUg1P5poIBiVeu_KdIsB_9T4liY5-98eVBJXG8es6T8OWx_umeTgLDF-5m9cKdlmpaMxUjh36XafA9Ldu4uVR-NRpvRNXVOKBsTBhPEA"
            product="Mountain Bike - Good Condition"
            price="$750"
            location="Berlin, DE"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCeegLlxFgIBLywCjelt93M15f6HO95nomdZxMTl4Z-z-dXqxT719cMUEJjtVw2aXMqAf4NN_pOrpRE4jSVspOGbWrez8aY8zTMc1iuf8jq7eoikkO4oeo6pjHi61iaq_kQWFtVXzh_sRhSc28-43CYSpGmhTbvdiroOqNq4avmp7s0PNY3MG-UC2u3A8KdnsbBwYGU1284e4abPKfpHLp6pI6ESWcWt9LYb00f05HTWAsAlmCIFT6tFczy7VjSnPzvAhXbB7GvuJE"
            product="Classic Novel Collection"
            price="$30"
            location="Chicago, IL"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuB8BraoE6P8nGO7utYGv4NsZLKGB039bcEWG13VbbMxJKzLXl350gHROKk7t37t9Dj-NbmJ3IAbEkgq2aFZJQgi-pYbMQtPQQWO6oshbL_y8s6HwnCaRy4FzNlmI4ylch57SAUhFclkJFHAa3yqXNNboCGPLynWMgzRxGrVtQuo9BrZDP5GbNqTmjnC4Dn8IMHcZOLNIhaqFd2iNztSVNGPn_gfQifNfcHMPr5lnJTIVgKJYBPJmiRlGA2QHijRPgP5BeAfIq5XXIE"
            product="Designer Handbag"
            price="$250"
            location="Paris, FR"
          />

           <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuBtInCrUYgPvbhCgTSDfNQSXxM8QQRlcg1s--bLVlc_rv3NfH3HVeEp39y_fnjBzW5es2i_hzIEYwZmEtk--1M10tnJfHU7fn_W36IUHPzRq1Qed_dLUxed-HjDL-AjLczhw6S06JXx1VntqoyvEITtNN1-iULm7LuSiy4UbVf9kSZHaMaoLpwjtqh0wsQnYMO7aSUPMSV7o_9uc8zDdDuwvvVO-LN9hvnDiDWPz8ruac4wqdw8rTO2c9fsZmuFdPfGMIMwF0jpx3c"
            product="Vintage Leather Jacket"
            price="$50"
            location="New York, NY"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCu85R3l8-uqeviaYuu-FD89aGwFELwEy6X2lDJmpasN94MlRovX2rfPC3-9R7GghOaKqGuetvagayie1LZzEudGkZCPBOTu7JEHSKxPng-kTm6hx5S8Pd3Heswv1Rk3-FxEAi6m3JPpbgh869P2k12bHU1nxeLoIIjJycbE3NRIkaRUuYMuXYMi3iXfAMXe4vx9-MqGfSEThYCt9UWEbY695v5b4pQeH8WeKfe-_0Kgn4xWQHVbecMsutueX9DHQmQ6JM5fMkI_qE"
            product="Used PS5 Console"
            price="$399"
            location="Los Angeles, CA"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuAdFsz0Q9lSs0DawNGD8KfT7TEJQLbjhD85WlL5bdq3wGZKUQ5MtOrT0eIwwJNDbRtovZ4qWRmd-LCwO6njZ5DmaJPnh6EZAf2l0eolTjwF_WlAy2-y3-9HyJ93GNmG7CEIkwREll3AImkz7RR60gocSO4abFYqlcbfh7tINA0_KycbtGt9G-BFUtSeakvuHTfKcmDY3UJBB56-xYX7hY1fmHlzh3dobK8KKkq7eFbcwRoFO3KwjnGzjUYftKO0sMfEZ3tbtQtwsog"
            product="Antique Wooden Chair"
            price="$120"
            location="London, UK"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCjC-Idge5qWV1lym6SJNByYlONQxN6d7guDRgdeF3955N8AItdYY7aEz6a7224eLXrMhgnCV2wBrN9Hh_NahmYRX-96p_Rc8rB-5UDA2kazsqiF5gT0MZCm5hkcl5ndxz5wv7XVxGMVU7-U798fIcTD3jSyTO1sye4mxFLUg1P5poIBiVeu_KdIsB_9T4liY5-98eVBJXG8es6T8OWx_umeTgLDF-5m9cKdlmpaMxUjh36XafA9Ldu4uVR-NRpvRNXVOKBsTBhPEA"
            product="Mountain Bike - Good Condition"
            price="$750"
            location="Berlin, DE"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCeegLlxFgIBLywCjelt93M15f6HO95nomdZxMTl4Z-z-dXqxT719cMUEJjtVw2aXMqAf4NN_pOrpRE4jSVspOGbWrez8aY8zTMc1iuf8jq7eoikkO4oeo6pjHi61iaq_kQWFtVXzh_sRhSc28-43CYSpGmhTbvdiroOqNq4avmp7s0PNY3MG-UC2u3A8KdnsbBwYGU1284e4abPKfpHLp6pI6ESWcWt9LYb00f05HTWAsAlmCIFT6tFczy7VjSnPzvAhXbB7GvuJE"
            product="Classic Novel Collection"
            price="$30"
            location="Chicago, IL"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuB8BraoE6P8nGO7utYGv4NsZLKGB039bcEWG13VbbMxJKzLXl350gHROKk7t37t9Dj-NbmJ3IAbEkgq2aFZJQgi-pYbMQtPQQWO6oshbL_y8s6HwnCaRy4FzNlmI4ylch57SAUhFclkJFHAa3yqXNNboCGPLynWMgzRxGrVtQuo9BrZDP5GbNqTmjnC4Dn8IMHcZOLNIhaqFd2iNztSVNGPn_gfQifNfcHMPr5lnJTIVgKJYBPJmiRlGA2QHijRPgP5BeAfIq5XXIE"
            product="Designer Handbag"
            price="$250"
            location="Paris, FR"
          />

           <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuBtInCrUYgPvbhCgTSDfNQSXxM8QQRlcg1s--bLVlc_rv3NfH3HVeEp39y_fnjBzW5es2i_hzIEYwZmEtk--1M10tnJfHU7fn_W36IUHPzRq1Qed_dLUxed-HjDL-AjLczhw6S06JXx1VntqoyvEITtNN1-iULm7LuSiy4UbVf9kSZHaMaoLpwjtqh0wsQnYMO7aSUPMSV7o_9uc8zDdDuwvvVO-LN9hvnDiDWPz8ruac4wqdw8rTO2c9fsZmuFdPfGMIMwF0jpx3c"
            product="Vintage Leather Jacket"
            price="$50"
            location="New York, NY"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCu85R3l8-uqeviaYuu-FD89aGwFELwEy6X2lDJmpasN94MlRovX2rfPC3-9R7GghOaKqGuetvagayie1LZzEudGkZCPBOTu7JEHSKxPng-kTm6hx5S8Pd3Heswv1Rk3-FxEAi6m3JPpbgh869P2k12bHU1nxeLoIIjJycbE3NRIkaRUuYMuXYMi3iXfAMXe4vx9-MqGfSEThYCt9UWEbY695v5b4pQeH8WeKfe-_0Kgn4xWQHVbecMsutueX9DHQmQ6JM5fMkI_qE"
            product="Used PS5 Console"
            price="$399"
            location="Los Angeles, CA"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuAdFsz0Q9lSs0DawNGD8KfT7TEJQLbjhD85WlL5bdq3wGZKUQ5MtOrT0eIwwJNDbRtovZ4qWRmd-LCwO6njZ5DmaJPnh6EZAf2l0eolTjwF_WlAy2-y3-9HyJ93GNmG7CEIkwREll3AImkz7RR60gocSO4abFYqlcbfh7tINA0_KycbtGt9G-BFUtSeakvuHTfKcmDY3UJBB56-xYX7hY1fmHlzh3dobK8KKkq7eFbcwRoFO3KwjnGzjUYftKO0sMfEZ3tbtQtwsog"
            product="Antique Wooden Chair"
            price="$120"
            location="London, UK"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCjC-Idge5qWV1lym6SJNByYlONQxN6d7guDRgdeF3955N8AItdYY7aEz6a7224eLXrMhgnCV2wBrN9Hh_NahmYRX-96p_Rc8rB-5UDA2kazsqiF5gT0MZCm5hkcl5ndxz5wv7XVxGMVU7-U798fIcTD3jSyTO1sye4mxFLUg1P5poIBiVeu_KdIsB_9T4liY5-98eVBJXG8es6T8OWx_umeTgLDF-5m9cKdlmpaMxUjh36XafA9Ldu4uVR-NRpvRNXVOKBsTBhPEA"
            product="Mountain Bike - Good Condition"
            price="$750"
            location="Berlin, DE"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCeegLlxFgIBLywCjelt93M15f6HO95nomdZxMTl4Z-z-dXqxT719cMUEJjtVw2aXMqAf4NN_pOrpRE4jSVspOGbWrez8aY8zTMc1iuf8jq7eoikkO4oeo6pjHi61iaq_kQWFtVXzh_sRhSc28-43CYSpGmhTbvdiroOqNq4avmp7s0PNY3MG-UC2u3A8KdnsbBwYGU1284e4abPKfpHLp6pI6ESWcWt9LYb00f05HTWAsAlmCIFT6tFczy7VjSnPzvAhXbB7GvuJE"
            product="Classic Novel Collection"
            price="$30"
            location="Chicago, IL"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuB8BraoE6P8nGO7utYGv4NsZLKGB039bcEWG13VbbMxJKzLXl350gHROKk7t37t9Dj-NbmJ3IAbEkgq2aFZJQgi-pYbMQtPQQWO6oshbL_y8s6HwnCaRy4FzNlmI4ylch57SAUhFclkJFHAa3yqXNNboCGPLynWMgzRxGrVtQuo9BrZDP5GbNqTmjnC4Dn8IMHcZOLNIhaqFd2iNztSVNGPn_gfQifNfcHMPr5lnJTIVgKJYBPJmiRlGA2QHijRPgP5BeAfIq5XXIE"
            product="Designer Handbag"
            price="$250"
            location="Paris, FR"
          />

           <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuBtInCrUYgPvbhCgTSDfNQSXxM8QQRlcg1s--bLVlc_rv3NfH3HVeEp39y_fnjBzW5es2i_hzIEYwZmEtk--1M10tnJfHU7fn_W36IUHPzRq1Qed_dLUxed-HjDL-AjLczhw6S06JXx1VntqoyvEITtNN1-iULm7LuSiy4UbVf9kSZHaMaoLpwjtqh0wsQnYMO7aSUPMSV7o_9uc8zDdDuwvvVO-LN9hvnDiDWPz8ruac4wqdw8rTO2c9fsZmuFdPfGMIMwF0jpx3c"
            product="Vintage Leather Jacket"
            price="$50"
            location="New York, NY"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCu85R3l8-uqeviaYuu-FD89aGwFELwEy6X2lDJmpasN94MlRovX2rfPC3-9R7GghOaKqGuetvagayie1LZzEudGkZCPBOTu7JEHSKxPng-kTm6hx5S8Pd3Heswv1Rk3-FxEAi6m3JPpbgh869P2k12bHU1nxeLoIIjJycbE3NRIkaRUuYMuXYMi3iXfAMXe4vx9-MqGfSEThYCt9UWEbY695v5b4pQeH8WeKfe-_0Kgn4xWQHVbecMsutueX9DHQmQ6JM5fMkI_qE"
            product="Used PS5 Console"
            price="$399"
            location="Los Angeles, CA"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuAdFsz0Q9lSs0DawNGD8KfT7TEJQLbjhD85WlL5bdq3wGZKUQ5MtOrT0eIwwJNDbRtovZ4qWRmd-LCwO6njZ5DmaJPnh6EZAf2l0eolTjwF_WlAy2-y3-9HyJ93GNmG7CEIkwREll3AImkz7RR60gocSO4abFYqlcbfh7tINA0_KycbtGt9G-BFUtSeakvuHTfKcmDY3UJBB56-xYX7hY1fmHlzh3dobK8KKkq7eFbcwRoFO3KwjnGzjUYftKO0sMfEZ3tbtQtwsog"
            product="Antique Wooden Chair"
            price="$120"
            location="London, UK"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCjC-Idge5qWV1lym6SJNByYlONQxN6d7guDRgdeF3955N8AItdYY7aEz6a7224eLXrMhgnCV2wBrN9Hh_NahmYRX-96p_Rc8rB-5UDA2kazsqiF5gT0MZCm5hkcl5ndxz5wv7XVxGMVU7-U798fIcTD3jSyTO1sye4mxFLUg1P5poIBiVeu_KdIsB_9T4liY5-98eVBJXG8es6T8OWx_umeTgLDF-5m9cKdlmpaMxUjh36XafA9Ldu4uVR-NRpvRNXVOKBsTBhPEA"
            product="Mountain Bike - Good Condition"
            price="$750"
            location="Berlin, DE"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuCeegLlxFgIBLywCjelt93M15f6HO95nomdZxMTl4Z-z-dXqxT719cMUEJjtVw2aXMqAf4NN_pOrpRE4jSVspOGbWrez8aY8zTMc1iuf8jq7eoikkO4oeo6pjHi61iaq_kQWFtVXzh_sRhSc28-43CYSpGmhTbvdiroOqNq4avmp7s0PNY3MG-UC2u3A8KdnsbBwYGU1284e4abPKfpHLp6pI6ESWcWt9LYb00f05HTWAsAlmCIFT6tFczy7VjSnPzvAhXbB7GvuJE"
            product="Classic Novel Collection"
            price="$30"
            location="Chicago, IL"
          />

          <Item
            imgLink="https://lh3.googleusercontent.com/aida-public/AB6AXuB8BraoE6P8nGO7utYGv4NsZLKGB039bcEWG13VbbMxJKzLXl350gHROKk7t37t9Dj-NbmJ3IAbEkgq2aFZJQgi-pYbMQtPQQWO6oshbL_y8s6HwnCaRy4FzNlmI4ylch57SAUhFclkJFHAa3yqXNNboCGPLynWMgzRxGrVtQuo9BrZDP5GbNqTmjnC4Dn8IMHcZOLNIhaqFd2iNztSVNGPn_gfQifNfcHMPr5lnJTIVgKJYBPJmiRlGA2QHijRPgP5BeAfIq5XXIE"
            product="Designer Handbag"
            price="$250"
            location="Paris, FR"
          />
        </>
      </div>

      <div className="flex items-center justify-center p-4">
        <a className="flex size-10 items-center justify-center" href="#">
          <span className="material-symbols-outlined text-[#0d171b]">
            chevron_left
          </span>
        </a>

        <a
          className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-[#3498DB]"
          href="#"
        >
          1
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          2
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          3
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          4
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d171b] rounded-full"
          href="#"
        >
          5
        </a>

        <a className="flex size-10 items-center justify-center" href="#">
          <span className="material-symbols-outlined text-[#0d171b]">
            chevron_right
          </span>
        </a>
      </div>
    </div>
  );
}

export default Home;
