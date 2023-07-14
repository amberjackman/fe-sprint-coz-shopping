import { Profiler, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
// import Header from "../components/Header";
import Productlist from "../components/Productlist";
import DebugComponent from "../util/DebugComponent";
export default function Main() {
  // API Call (네트워크 요청) -> useEffect

  // useEffect(() => {
  //   const customFetch = async () => {
  //     const res = await fetch(
  //       `http://cozshopping.codestates-seb.link/api/v1/products?count=10`
  //     );
  //     const json = await res.json();
  //     setProducts(json);
  //   };
  //   customFetch();

  // 브라우저의 API의 하나로 Fetch API가 있습니다.
  // // 브라우저 내장 기능
  // fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=10`)
  //   .then((res) => res.json())
  //   .then((json) => setProducts(json));

  // 비동기
  // 정신없이 순서 뒤죽박죽으로 오는 요청을
  // 순서대로 잘 처리하기 위해서
  // async/await
  // await 뒤의 비동기 요청을 동기적으로 처리
  // }, []);

  return (
    <ProductCard></ProductCard>
    // {/* <DebugComponent data={products}></DebugComponent> */}
  );
}
