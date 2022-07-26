import { useEffect, useState } from "react"
import {Map, MapMarker} from "react-kakao-maps-sdk"

interface Props{
  center: {lat: number; lng: number}
  errMsg?: null | string
  isLoading: boolean
}

export default function KakaoMap(){
  const positions = [
    {
      title: "꿈마루작은도서관",
      latlng: { lat: 35.1856463556, lng: 128.9497024914 },
    },
    {
      title: "도란도란작은도서관",
      latlng: { lat: 35.10998668, lng: 128.9213699524 },
    }
  ]
  const [ state, setState ] = useState<Props>({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  })
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }
  }, [])

    return( 
        <Map
        center={state.center}
        style={{ width: "35%", height: "300px", margin: 0}}
        level={3}
        >
          {!state.isLoading && (
              <MapMarker position={state.center}>
                <div style={{ padding: "5px", color: "#000" }}>
                  {state.errMsg ? state.errMsg : "시용자 위치"}
                </div>
              </MapMarker>
          )}
          {positions.map((position, index) => (
          <MapMarker
            key={`${position.title}-${position.latlng}`}
            position={position.latlng} // 마커를 표시할 위치
            image={{
              src: "https://img.icons8.com/color/48/undefined/library-building.png", // 마커이미지의 주소입니다
              size: {
                width: 35,
                height: 40
              }, // 마커이미지의 크기입니다
            }}
            title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
        ))}
      </Map>
    )
}