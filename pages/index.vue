<template>
  <!-- 섹션1 시작 -->
  <section id="section1" class="text-black-800 bg-black-100/80 min-h-dvh w-full pt-8 overflow-hidden text-left">
    <div class="px-6">
      <NuxtLink to="http://www.clfa.or.kr/popup_fcsc.asp" target="_blank" class="text-black-500 inline-block mb-6 text-xs font-light">2024-4090465-25-5-00001 온누리대부중개 [조회]</NuxtLink>
      <div class="flex flex-col items-start justify-center space-y-2">
        <h2 class="text-black-700 text-xl">대출이 필요할땐?</h2>
        <h1 class="section1Text text-3xl font-extrabold leading-tight">
          쉽고 간편하게<br />
          <eb class="text-primary-500">무직자대출로</eb>
          <eb class="text-secondary-500"> 해결하자!</eb>
        </h1>
      </div>
    </div>
    <ReqForm />
    <img src="~/assets/img/section1_visual_bg.webp" alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-full mt-10" />
  </section>

  <!-- 섹션2 시작 -->
  <section id="section2" class="text-black-800 w-full py-24 overflow-hidden text-left bg-white">
    <div class="space-y-8">
      <div class="flex flex-col items-start justify-center px-6">
        <h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">대출은 역시 온누리</h2>
        <h2 data-aos="fade-up" data-aos-duration="1000" class="section2Text mt-2 text-3xl font-extrabold leading-tight"><eb class="text-primary-500">온누리는</eb> 다릅니다!</h2>
        <NuxtLink to="https://pf.kakao.com/_AexibG" target="_blank" data-aos="fade-up" data-aos-duration="1000" class="w-fit bg-primary-500 rowCenter shadow-primary-500/40 flex px-8 py-2 mt-4 space-x-2 text-white rounded-md shadow-md">
          <img src="~/assets/img/kakao_logo_w.svg" alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-6" />
          <span class="text-lg font-bold">카카오톡 빠른 상담하기</span>
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 w-full gap-4 px-4 text-lg font-bold leading-snug text-center *:p-4">
        <div data-aos="fade-up" data-aos-duration="1000" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg">
          <div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full">
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <h3 class="">
            낮은금리<br />
            <b class="text-primary-500">이자부담 NO!</b>
          </h3>
        </div>

        <div data-aos="fade-up" data-aos-duration="1500" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg">
          <div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full">
            <i class="fa-solid fa-arrow-up"></i>
          </div>
          <h3 class="">
            상황에 맞는<br />
            <b class="text-primary-500">대출 OK!</b>
          </h3>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg">
          <div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full">
            <i class="fa-solid fa-hand-point-up"></i>
          </div>
          <h3 class="">
            안전한<br />
            <b class="text-primary-500">대출 OK!</b>
          </h3>
        </div>

        <div data-aos="fade-up" data-aos-duration="1500" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg">
          <div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full">
            <i class="fa-solid fa-scroll"></i>
          </div>
          <h3 class="">
            상담,조회,심사까지<br />
            <b class="text-primary-500">빠른진행 OK!</b>
          </h3>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg">
          <div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full">
            <i class="fa-solid fa-coins"></i>
          </div>
          <h3 class="">
            취급<br />
            <b class="text-primary-500">수수료 NO!</b>
          </h3>
        </div>

        <div data-aos="fade-up" data-aos-duration="1500" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg">
          <div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full">
            <i class="fa-solid fa-comments-dollar"></i>
          </div>
          <h3 class="">
            1:1 무료상담을 통해<br />
            <b class="text-primary-500">원하는 답변 OK!</b>
          </h3>
        </div>
      </div>
    </div>
  </section>

  <!-- 섹션3 시작 -->
  <section id="section3" class="w-full py-24 overflow-hidden text-left text-white bg-[url('~/assets/img/section3_visual_bg.webp')]">
    <div class="space-y-8">
      <div class="flex flex-col items-start justify-center px-6 space-y-2">
        <h2 data-aos="fade-up" data-aos-duration="1000" class="text-xl font-light">상담신청 전에 꼭 참고하세요!</h2>
        <h2 data-aos="fade-up" data-aos-duration="1000" class="section3TextWhite text-3xl font-extrabold leading-tight">대출 조건상세정보</h2>
      </div>
      <div class="text-primary-900 grid w-full grid-cols-1 px-4 *:px-4 *:py-5 gap-4">
        <div data-aos="fade-up" data-aos-duration="1200" class="flex items-center justify-start space-x-4 bg-white rounded-md">
          <i class="fa-solid fa-circle-check fa-2xl"></i>
          <h3 class="">
            최소 3개월 이상 4대보험 가입<br />
            <b>직장인 OK, 사업자 OK, 프리랜서 OK, 주부·군인·무직자도 OK</b>
          </h3>
        </div>
        <div data-aos="fade-up" data-aos-duration="1400" class="flex items-center justify-start space-x-4 bg-white rounded-md">
          <i class="fa-solid fa-circle-check fa-2xl"></i>
          <h3 class=""><b>만 19세 이상</b> 성인 OK</h3>
        </div>
        <div data-aos="fade-up" data-aos-duration="1600" class="flex items-center justify-start space-x-4 bg-white rounded-md">
          <i class="fa-solid fa-circle-check fa-2xl"></i>
          <h3 class=""><b>NICE / KCB 400점 이상</b> 고객 OK</h3>
        </div>
        <div data-aos="fade-up" data-aos-duration="1800" class="flex items-center justify-start space-x-4 bg-white rounded-md">
          <i class="fa-solid fa-circle-check fa-2xl"></i>
          <h3 class=""><b>연체/신불 6일 이상</b> 고객은 NO</h3>
        </div>
      </div>
    </div>
  </section>

  <!-- 섹션4 시작 -->
  <section id="section4" class="text-black-800 w-full py-24 overflow-hidden text-left bg-[url('~/assets/img/section4_visual_bg.webp')]">
    <div class="space-y-8">
      <div class="flex flex-col items-start justify-center px-6 space-y-2">
        <h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">언제나 저금리 신속 대출!</h2>
        <h2 data-aos="fade-up" data-aos-duration="1000" class="section4Text text-3xl font-extrabold leading-tight">
          무직자, 주부, 프리랜서<br />
          사업자, 직장인, 군인<br />
          <eb class="text-primary-500">저금리로</eb>
          <eb class="text-secondary-500"> 신속한 대출</eb>
        </h2>
      </div>
      <div class="relative flex flex-col items-start justify-center w-full px-6 space-y-6">
        <div class="left-16 border-black-800 top-6 absolute z-10 w-full h-[calc(100%-1.875rem)] border-l-2"></div>

        <div data-aos="fade-up" data-aos-duration="1000" class="bg-black-800 px-4 py-[.125rem] rowCenter z-20 w-fit">
          <h3 class="font-bold text-white">STEP 01</h3>
        </div>

        <div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl">
          <div class="colCenter size-14 aspect-1 bg-primary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]">
            <i class="fa-solid fa-file-lines"></i>
          </div>
          <div class="flex flex-col items-start justify-center space-y-1">
            <h4 class="text-primary-500 text-xl font-bold">상담신청</h4>
            <h5 class="text-black-700">신청폼을 통하여 인적정보 내용을 입력합니다.</h5>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="bg-black-700 px-4 py-[.125rem] rowCenter z-20 w-fit">
          <h3 class="font-bold text-white">STEP 02</h3>
        </div>

        <div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl">
          <div class="colCenter size-14 aspect-1 bg-secondary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]">
            <i class="fa-solid fa-phone-volume"></i>
          </div>
          <div class="flex flex-col items-start justify-center space-y-1">
            <h4 class="text-secondary-500 text-xl font-bold">대출무료상담</h4>
            <h5 class="text-black-700">전문 상담사와 고객님의 상황에 맞춰 상담을 진행합니다.</h5>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="bg-black-800 px-4 py-[.125rem] rowCenter z-20 w-fit">
          <h3 class="font-bold text-white">STEP 03</h3>
        </div>

        <div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl">
          <div class="colCenter size-14 aspect-1 bg-primary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]">
            <i class="fa-solid fa-magnifying-glass-plus"></i>
          </div>
          <div class="flex flex-col items-start justify-center space-y-1">
            <h4 class="text-primary-500 text-xl font-bold">안전한 대출심사</h4>
            <h5 class="text-black-700">고객님의 정보를 토대로 시스템에 의해 심사가 진행됩니다.</h5>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="bg-black-700 px-4 py-[.125rem] rowCenter z-20 w-fit">
          <h3 class="font-bold text-white">STEP 04</h3>
        </div>

        <div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl">
          <div class="colCenter size-14 aspect-1 bg-secondary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]">
            <i class="fa-solid fa-address-card"></i>
          </div>
          <div class="flex flex-col items-start justify-center space-y-1">
            <h4 class="text-secondary-500 text-xl font-bold">대출승인</h4>
            <h5 class="text-black-700">대출승인 여부, 한도 및 금리, 준비 서류 등을 안내합니다.</h5>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="bg-black-800 px-4 py-[.125rem] rowCenter z-20 w-fit">
          <h3 class="font-bold text-white">STEP 05</h3>
        </div>

        <div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl">
          <div class="colCenter size-14 aspect-1 bg-primary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]">
            <i class="fa-solid fa-sack-dollar"></i>
          </div>
          <div class="flex flex-col items-start justify-center space-y-1">
            <h4 class="text-primary-500 text-xl font-bold">대출금 입금</h4>
            <h5 class="text-black-700">대출승인 이후, 고객님 계좌에 대출금이 입금됩니다.</h5>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 섹션5 시작 -->
  <section id="section5" class="text-black-800 w-full py-24 overflow-hidden text-left bg-white">
    <div class="space-y-8">
      <div class="flex flex-col items-start justify-center px-6 space-y-2">
        <h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">나의 월 상환금액이 어떻게 될까?</h2>
        <h2 data-aos="fade-up" data-aos-duration="1000" class="section5Text text-3xl font-extrabold leading-tight">
          월 납입금
          <eb class="text-primary-500">계산기</eb>
        </h2>
      </div>
      <CalcForm />
    </div>
  </section>

  <section id="section6" class="text-black-800 bg-black-100/70 w-full py-24 overflow-hidden text-left">
    <div class="space-y-8">
      <div class="flex flex-col items-start justify-center px-6 space-y-2">
        <!-- 섹션 제목 -->
        <h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">고객님들이 온누리에<br />자주 물어보시는 질문들입니다.</h2>
        <h2 data-aos="fade-up" data-aos-duration="1000" class="section6Text text-primary-500 text-3xl font-extrabold leading-tight">자주 묻는<eb class="text-secondary-500"> 질문</eb></h2>
      </div>

      <div class="grid items-center justify-center w-full grid-cols-1 gap-4 px-4 text-left">
        <!-- 질문 리스트 -->
        <div v-for="(item, index) in questions" :key="index" class="colCenter w-full" :data-aos="'fade-up'" :data-aos-duration="1000" :data-aos-delay-pc="index * 100" @click="toggleQuestion(index)">
          <div
            :id="'section6_wrapper_' + (index + 1)"
            :class="{
              section6_list_color: item.open,
              'section6-wrapper': true,
              section6_list_black: !item.open,
              flex: true,
              'items-center': true,
              'justify-between': true,
              'w-full': true,
              'px-4': true,
              'py-3': true,
              'rounded-md': true,
            }"
          >
            <div class="rowCenter space-x-3">
              <p class="text-primary-500 size-8 aspect-1 text-xl font-extrabold text-center bg-white rounded-full">{{ index + 1 }}</p>
              <h3 class="text-xl font-bold">{{ item.title }}</h3>
            </div>
            <div :id="'section6_list_deactive_' + (index + 1)" :class="{ 'section6-toggle': true, hidden: item.open }">
              <i class="fa-solid fa-chevron-down fa-xl mo-only"></i>
            </div>
            <div :id="'section6_list_active_' + (index + 1)" :class="{ 'section6-toggle': true, hidden: !item.open }">
              <i class="fa-solid fa-chevron-up fa-xl mo-only"></i>
            </div>
          </div>

          <div :id="'section6_list_wrap_' + (index + 1)" :class="{ 'text-black-700': true, 'border-primary-300': true, 'flex-col': true, 'items-start': true, 'justify-between': true, hidden: !item.open, 'w-full': true, 'py-4': true, 'space-y-3': true, 'text-base': true, 'font-light': true, 'bg-white': true, 'border-b': true }">
            <h4 class="section6_list">{{ item.answer }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 섹션7 시작 -->
  <section id="section7" class="text-black-800 w-full py-24 overflow-hidden text-left bg-white">
    <div class="space-y-8">
      <div class="flex flex-col items-start justify-center px-6 space-y-2">
        <h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">온누리에서 성공적으로<br />대출 진행하신 고객님들 입니다.</h2>
        <h2 data-aos="fade-up" data-aos-duration="1000" class="section7Text text-primary-500 text-3xl font-extrabold leading-tight">
          대출
          <eb class="text-secondary-500"> 성공사례</eb>
        </h2>
      </div>

      <div class="grid w-full grid-cols-1 gap-8 px-4">
        <div data-aos="zoom-in-right" data-aos-duration="1200" class="shadow-black-400/80 z-20 flex items-start justify-start w-full px-4 py-8 space-x-4 bg-white rounded-md shadow-xl">
          <img src="~/assets/img/section7_profile_01.webp" alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-[40%] pt-1 animate-pulse animate-duration-[2000ms] animate-ease-in-out" />
          <div class="flex flex-col items-start justify-center w-full space-y-2">
            <p class="bg-black-700 px-2 py-1 text-xs text-white">
              {{ formattedDate }}
            </p>
            <div class="rowCenter w-fit space-x-2">
              <h3 class="text-2xl font-extrabold">김**님</h3>
              <h4 class="text-black-700 whitespace-nowrap text-base font-semibold">무직자, 35세 남성</h4>
            </div>
            <div class="border-black-700 w-full border-b"></div>
            <h5 class="text-black-600 text-sm font-light">기존 대부업체에 신청했을때 신용등급은 좋은데 소득증빙이 안돼서 부결이 되었습니다. 그러다 온누리대부에 문의하여 상담신청을 하였는데 전문상담원께서 친절하게 자세한 설명을 해주셔서 어렵지않게 진행하였습니다. 덕분에 자금 해결이 되어 너무 다행이고 너무 감사합니다.</h5>
          </div>
        </div>

        <div data-aos="zoom-in-left" data-aos-duration="1300" class="shadow-black-400/80 z-20 flex items-start justify-start w-full px-4 py-8 space-x-4 bg-white rounded-md shadow-xl">
          <img src="~/assets/img/section7_profile_02.webp" alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-[40%] pt-1 animate-pulse animate-duration-[2000ms] animate-ease-in-out" />
          <div class="flex flex-col items-start justify-center w-full space-y-2">
            <p class="bg-black-700 px-2 py-1 text-xs text-white">
              {{ formattedDate }}
            </p>
            <div class="rowCenter w-fit space-x-2">
              <h3 class="text-2xl font-extrabold">이**님</h3>
              <h4 class="text-black-700 whitespace-nowrap text-base font-semibold">주부, 32세 여성</h4>
            </div>
            <div class="border-black-700 w-full border-b"></div>
            <h5 class="text-black-600 text-sm font-light">생활고에 시달려 힘들었는데 온누리에 연락해서 전문상담원과 자세한 상담을 진행하였고, 자세하게 진행절차를 일일히 설명하여 대출 당일 입금 받았습니다. 너무 감사하고 철저하게 진행을 도와주셔서 너무 감사했습니다.</h5>
          </div>
        </div>

        <div data-aos="zoom-in-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-start justify-start w-full px-4 py-8 space-x-4 bg-white rounded-md shadow-xl">
          <img src="~/assets/img/section7_profile_03.webp" alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-[40%] pt-1 animate-pulse animate-duration-[2000ms] animate-ease-in-out" />
          <div class="flex flex-col items-start justify-center w-full space-y-2">
            <p class="bg-black-700 px-2 py-1 text-xs text-white">
              {{ formattedDate }}
            </p>
            <div class="rowCenter w-fit space-x-2">
              <h3 class="text-2xl font-extrabold">신**님</h3>
              <h4 class="text-black-700 whitespace-nowrap text-base font-semibold">직장인, 41세 남성</h4>
            </div>
            <div class="border-black-700 w-full border-b"></div>
            <h5 class="text-black-600 text-sm font-light">갑작스럽게 큰 목돈이 필요했는데 한도가 모자라서 다른곳 알아보다 온누리대부를 만나 전문상담사 안내에 따라 진행을 하였고, 제가 원하는 목돈이 당일 승인되고 입금까지 되어 너무 다행이고 감사하였습니다.</h5>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 섹션8 시작 -->
  <section id="section8" class="min-h-dvh bg-primary-500 w-full pt-24 overflow-hidden text-left text-white">
    <div class="px-6">
      <div class="flex flex-col items-start justify-center space-y-2">
        <h2 class="text-xl">대출이 필요할땐?</h2>
        <h1 class="section8TextWhite text-3xl font-extrabold leading-tight">
          쉽고 간편하게<br />
          무직자대출로 해결하자!
        </h1>
      </div>
    </div>
    <reqForm />
    <img src="~/assets/img/section8_visual_bg.webp" alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-full -mt-8" />
  </section>

  <!-- 섹션9 시작 -->
  <section id="section9" class="text-white w-full py-24 overflow-hidden text-left bg-[url('~/assets/img/section9_visual_bg.webp')]">
    <div class="space-y-10">
      <div class="px-6 space-y-8">
        <div class="flex flex-col items-start justify-center space-y-4">
          <img data-aos="fade-up" data-aos-duration="1000" src="~/assets/img/section9_visual_01.webp" alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-[30%]" />
          <h2 data-aos="fade-up" data-aos-duration="1000" class="section9TextWhite text-primary-500 text-3xl font-extrabold leading-tight">보이스피싱 <eb class="text-white"> 주의사항</eb></h2>
          <div data-aos="fade-up" data-aos-duration="1000" class="w-12 border-b-2 border-white"></div>
          <h3 data-aos="fade-up" data-aos-duration="1200" class="text-black-200 text-xl font-light">
            온누리는 <b>어떤 경우</b>라도 고객님의 계좌번호, 비밀번호, 보안카드, OTP번호 등
            <b class="underline-offset-[.375rem] underline">정보를 절대 요구하지 않습니다!</b>
          </h3>
        </div>
      </div>
      <div class="flex flex-col items-start justify-center px-4 space-y-6">
        <div data-aos="fade-up" data-aos-duration="1400" class="w-fit">
          <h4 class="relative z-20 px-2 text-lg font-light">
            아래와 같은 상황 발생 시 <b>즉시 신고하세요<i>!</i></b>
          </h4>
          <img src="~/assets/img/section9_visual_02.webp" alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="top-3 w-[19.5625rem] absolute z-10 opacity-35" />
        </div>
        <div data-aos="fade-up" data-aos-duration="1600" class="text-black-700 colCenter w-full p-6 bg-white rounded-md">
          <div class="flex flex-col items-start justify-center w-full space-y-4">
            <div class="rowCenter space-x-4">
              <i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[1500ms]"></i>
              <h5 class="font-light">대출처리비용 <b>중개수수료 요구</b> 및<br /><b>선입금을 요구</b>했을 시</h5>
            </div>
            <div class="rowCenter space-x-4">
              <i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[2000ms]"></i>
              <h5 class="font-light">당사/검찰/경찰/금감원 등 사칭하여<br /><b>계좌이체 요구</b>했을 시</h5>
            </div>
            <div class="rowCenter space-x-4">
              <i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[2500ms]"></i>
              <h5 class="font-light">가족 및 지인을 이용한<br /><b>협박성 전화</b>왔을 시</h5>
            </div>
            <div class="rowCenter space-x-4">
              <i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[3000ms]"></i>
              <h5 class="font-light">계좌요구/보안카드/OTP번호 등<br /><b>정보 요구</b> 시</h5>
            </div>
          </div>
        </div>
        <h6 data-aos="fade-up" data-aos-duration="1600" class="text-black-300 px-2 text-sm font-light">온누리대부중개, 금융사, 정부기관을 사칭하여 선입금 및 개인금융 정보를 요구하는 등 의심되는 전화를 받으셨다면 아래 번호로 신고바랍니다.</h6>
        <div data-aos="fade-up" data-aos-duration="1800" class="text-black-200 flex flex-col items-start justify-center w-full px-2 space-y-1 font-light">
          <NuxtLink to="tel:010-3468-3554"><b>온누리 대표번호</b> : 010-3468-3554</NuxtLink>
          <NuxtLink to="tel:1332"><b>금감원</b> : (국번없이) 1332</NuxtLink>
          <NuxtLink to="tel:112"><b>경찰청</b> : (국번없이) 112</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();
const formattedDate = ref(`${month.toString().padStart(2, "0")}월 ${day.toString().padStart(2, "0")}일`);

const questions = ref([
  {
    title: "대출한도조회를 했을때 신용등급에 영향이 있나요?",
    answer: "대출 문의 및 한도를 조회하셔도 타 금융사에 정보가 제공되지 않아 신용등급에 영향을 주지 않습니다!",
    open: false,
  },
  {
    title: "꼭 지점에 방문해야 대출이 가능한건가요?",
    answer: "아닙니다! 비대면으로 가능하며 전문상담원과의 통화로도 대출이 가능합니다! 상담신청 후 전문상담사가 순차적으로 연락을 드리고 있습니다!",
    open: false,
  },
  {
    title: "추가 대출을 받을 수도 있나요?",
    answer: "물론입니다! 고객님의 현재 대출 상황에 따라 대출이 기대출이 있으셔도 추가대출 및 통합대환대출이 가능합니다!",
    open: false,
  },
  // 추가 질문들
]);

onMounted(() => {
  if (process.client) {
    questions.value[0].open = true;
  }
});

const toggleQuestion = (index: number) => {
  questions.value.forEach((item, i) => {
    if (i !== index) item.open = false;
  });
  questions.value[index].open = !questions.value[index].open;
};
</script>
