# 7.8 (**REST API**)

#### 개념

두 컴퓨터 시스템이 인터넷을 통해 정보를 안전하게 교환하기 위해 사용하는 인터페이스

→ REST 기반의 아키텍처를 사용함으로써 대규모의 고성능 특징을 안정적으로 지원할 수 있음

REST는 HTTP URI를 통해 자원을 명시하고 HTTP Method를 통해 해당 지원에 대한 CRUD Operation을 지원하는 것을 의미함

→ 웹 사이트의 이미지, 텍스트, DB 내용 등의 모든 자원에 고유한 ID인 HTTP URI를 부여

---

#### 구성

자원에 대한 CRUD 요청을 특정한 형태로 구성하여 전달.

- 메서드 (Method)
- 자원과 자원에 대한 표현 (Resource and Representation of Resource)

---

#### 작동 방식

- 클라이언트가 서버에 요청을 전송한다. (이 때, 클라이언트는 API 문서에 따라 서버가 이해할 수 있는 형식에 맞춰 요청을 작성)
- 서버가 클라이언트를 인증하고 해당 요청을 수행할 수 있는 권한이 있는지 확인
- 권한이 확인되면 서버는 요청을 수신하고 내부적으로 처리
- 서버가 클라이언트에게 응답을 반환.

---

#### 특징

- **Server-Client 구조**

→ Server는 API를 제공하고 비즈니스 로직을 처리하고 Client는 사용자 인증이나 세션 정보 등을 직접 관리하고 책임짐으로써 서로간의 의존도가 줄어든다.

- **Stateless (무상태)**

→ Client의 상태를 Server에 저장하지 않으므로 구현이 단순

→ Server는 각각의 요청을 별개의 것으로 인식하고 처리하므로 처리 방식이 일관됨.

- **Cacheable (캐시 처리 가능성)**

→ HTTP의 캐시 메커니즘을 사용하여 응답을 클라이언트 측에서 캐싱 가능. 캐시를 통해 전체 응답 시간과 서버의 자원 이용률을 향상시킬 수 있음.

- **Layered System (계층화)**

→ 클라이언트는 중간 계층이 서버와 직접 통신하는지 여부를 알 수 없음. 이를 통해 시스템의 구조를 더 유연하게 설계 가능.

- **Uniform Interface (일관성 있는 인터페이스)**

→ 리소스를 관리하는데 표준화된 메서드를 사용. 예를 들어 HTTP 메서드 (GET, POST, PUT, DELETE)를 이용하여 리소스를 생성, 읽기, 업데이트, 삭제함.

---

#### 장점

- **단순성**

→ REST API는 HTTP 프로토톨을 기반으로 하므로 개발자들이 익숙하게 사용할 수 있음.

- **확장성**

→ 클라이언트와 서버의 독립적인 개발이 가능.

- **유연성**

→ 다양한 데이터 형식 사용 가능

---

#### 단점

- **표준 부족**

→ REST는 아키텍처 스타일이지 프로토콜이나 표준이 아님. 따라서 설계와 구현에 있어서 일관성이 부족할 수 있음. 이는 동일한 리소스에 대해 다른 개발자가 서로 다른 REST API를 설계할 가능성 존재

- **무상태성**

→ 클라이언트가 매번 모든 필요한 정보를 제공해야 함. 이로 인해 중복된 데이터 전송이 발생할 수도 있음

- **보안 문제**

→ REST API는 일반적으로 HTTP를 사용함으로, 보안에 신경 써야 함. HTTPS를 사용하지 않으면 데이터가 중간에 탈취될 수 있음.

---

#### REST API URI 설계 규칙

1. 명사,소문자 ⇒ 동사 X
2. 명사는 복수형
3. URI 마지막은 ‘/’ 포함 X
4. URI는 언더바(’\_’) X, 하이픈(’-’) O
5. 파일의 확장자를 표시 X

+++

- **RESTful API와 REST API의 차이**

⇒ RESTful API는 REST 아키텍처 스타일을 준수하는 API를 말합니다. REST API는 RESTful API와 같은 의미로 사용되지만, RESTful API는 더 엄격하게 REST 원칙을 따르는 경우를 의미합니다.

- **REST API에서의 상태코드**

⇒ 100번대는 정보 응답코드로 요청을 수신했으며 해당 요청을 처리하고 있음을 뜻합니다.

⇒ 200번대는 성공 응답코드로 요청을 수신하고 처리했음을 뜻합니다.

⇒ 300번대는 리다이렉션 응답코드로 요청을 위해 추가적인 조치가 필요함을 의미합니다.

⇒ 400번대는 클라이언트 오류 응답코드로 요청의 문법이 잘못되었거나 요청을 처리할 수 없음을 의미합니다.

⇒ 500번대는 서버 오류 응답코드로 요청은 유효하나 서버가 요청을 충족할 수 없음을 의미합니다.

---

---

# 7.9 (**상태관리 Redux**)

#### 1. Redux의 주요개념

- **Store**
  애플리케이션의 상태 트리를 담고 있는 객체. 단 하나의 스토어만 존재.

- **Action**
  상태에 변화를 일으키기 위한 지시사항. 자바스크립트 객체로 표현되며, 최소한 `type` 속성을 가져야 함.

- **Reducer**
  액션을 처리하여 새로운 상태를 반환하는 함수. `state`와 `action`을 인수로 받아 새로운 `state`를 반환.

- **Dispatch**
  액션을 스토어에 보내는 메서드. 이를 통해 상태를 변경 가능.

- **Selector**
  스토어에서 필요한 데이터를 선택하는 함수.

#### 2. Redux의 장점

- **예측 가능성**: 상태 변화가 명확하고 예측 가능.
- **중앙화된 상태 관리**: 애플리케이션의 모든 상태를 중앙 스토어에서 관리.
- **디버깅 용이성**: 상태 변화의 기록을 쉽게 추적할 수 있어 디버깅이 용이.
- **유지보수성**: 명확한 구조와 패턴 덕분에 코드 유지보수가 쉬움.

#### 3. React와 Redux 통합

```javascript
1. Redux 설치

npm install redux react-redux

2. 액션 생성자 정의

export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

3. 리듀서 정의

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;


4. 스토어 생성

import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default store;

5. React와 Redux 연결

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

6. React 컴포넌트에서 Redux 사용

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;

```

---

---

# 7.10 (**시그널링**)

#### 시그널링

WebRTC를 구현하기 위해선 시그널링의 개념을 알고 있어야 함.

- **시그널링**
  시그널링(Signaling)은 WebRTC 연결을 설정하고 제어하기 위해 필요한 정보를 교환하는 과정! WebRTC는 클라이언트 간의 직접적인 P2P(Peer-to-Peer) 통신을 가능하게 하지만, 이를 위해서는 초기 연결 설정, 네트워크 정보 교환, 미디어 설정 등을 위한 정보 교환이 필요. 이 과정이 바로 시그널링임.

- **시그널링의 역할**

  1. 초기 연결 설정:
     두 클라이언트는 WebSocket 서버를 통해 서로의 존재를 알리고, 서버는 각 클라이언트에게 상대방의 연결 정보를 전달.

  2. SDP(Session Description Protocol) 교환:
     클라이언트 A가 연결 요청을 포함한 SDP 오퍼를 WebSocket 서버를 통해 클라이언트 B에게 보냄.
     클라이언트 B는 SDP 오퍼를 수신하고, 이에 대한 응답(SDP 앤서)을 WebSocket 서버를 통해 클라이언트 A에게 보냄.

  3. ICE(Interactive Connectivity Establishment) 후보 교환:
     각 클라이언트는 자신이 사용할 수 있는 네트워크 경로(ICE 후보)를 WebSocket 서버를 통해 교환.
     이를 통해 최적의 경로를 찾고 P2P 연결을 설정함.

#### 시그널링 과정 요약

- 클라이언트 A가 WebSocket을 통해 시그널링 서버에 연결 요청을 보내고, 시그널링 서버는 연결 요청을 클라이언트 B에게 전달.
- 클라이언트 B는 연결 응답을 생성하여 시그널링 서버를 통해 클라이언트 A에게 보냄.
- 클라이언트 A와 클라이언트 B는 시그널링 서버를 통해 ICE 후보를 교환하여 P2P 연결을 설정. 이후, P2P 연결이 설정되면 WebRTC를 통해 직접 통신 진행.

#### 요약

WebRTC가 P2P 통신을 가능하게 하지만 이를 위해선 서로를 인식할 수 있게 하는 시그널링이 구현되어야 함. 이러한 시그널링을 구현하는 데에 사용하는 것이 WebSocket.

---

---

# 7.11

#### WebSocket, WebRTC

- **WebSocket**
  브라우저와 서버 간의 양방향 통신을 가능하게 함. 서버와 클라이언트 간의 실시간 데이터 전송에 사용됨!

- **WebRTC**
  웹 애플리케이션과 사이트가 브라우저 간에 직접 오디오, 비디오, 데이터 스트림을 교환할 수 있게 해주는 기술. WebRTC는 플러그인이나 서드파티 소프트웨어 없이 브라우저 간 실시간 통신을 가능하게 함.

- **WebRTC에서 WebSocket을 사용하는 이유**
  WebRTC는 클라이언트 간의 P2P 통신을 지원하지만, 초기 연결 설정(시그널링)을 위해서는 중개 서버가 필요함. 시그널링 서버는 두 클라이언트가 서로를 찾고, 연결 설정을 위한 정보를 교환하는 데 사용되는데, 여기서 WebSocket이 시그널링 프로토콜로 활용됨.

> 개념적으로는 이해되는데, 통신을 하는 과정에서 데이터가 어떤식으로 이동하고 또 보안이나 에러처리, 성능 최적화, 다자간 통화의 경우에는 따로 처리해야 할 부분들이 더 존재하는 거 같아서 추가적인 공부가 필요할 듯 함.

# 7.12 (** 성능 최적화 **)

#### React memo

- 언제 사용할까

  1. **컴포넌트가 동일한 props로 자주 리렌더링되는 경우**:
     동일한 props로 여러 번 리렌더링되는 경우 React.memo를 사용하면 성능을 향상시킬 수 있음.

  2. **컴포넌트가 큰 트리 구조를 가지고 있어 리렌더링 비용이 큰 경우**:
     리렌더링 비용이 큰 복잡한 컴포넌트에서 React.memo를 사용하면 성능 이점을 얻을 수 있음.

  3. **불필요한 리렌더링을 피하고자 하는 경우**:
     부모 컴포넌트의 리렌더링으로 인해 자식 컴포넌트가 불필요하게 리렌더링되는 것을 방지하고자 할 때 유용함.

- 그럼 항상 react memo를 사용하면 되나?

  1. **컴포넌트가 간단하고 리렌더링 비용이 적은 경우**:
     간단한 컴포넌트에서는 React.memo를 사용해도 큰 성능 향상을 얻기 어려움.

  2. **props가 자주 변경되는 경우**:
     React.memo는 props가 변경되지 않을 때만 리렌더링을 방지하므로, props가 자주 변경되는 컴포넌트에서는 효과가 적음.

  3. **성능 최적화가 필요 없는 경우**:
     불필요한 최적화는 코드 복잡도를 증가시킬 수 있으므로, 성능 이슈가 없는 경우에는 굳이 사용할 필요가 없음.

#### useCallback

useCallback은 React에서 제공하는 훅(Hook)으로, 함수의 메모이제이션을 통해 성능 최적화를 도와줌. 주로 자식 컴포넌트에 함수를 props로 전달할 때, 해당 함수가 불필요하게 재생성되는 것을 방지하기 위해 사용됨.

- 사용법

  useCallback은 두 개의 인수를 받음:

  1. **메모이제이션할 함수**: 재사용하고자 하는 함수.
  2. **의존성 배열**: 배열 안의 값이 변경될 때만 함수가 새로 생성됩니다.

  ```javascript
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```
