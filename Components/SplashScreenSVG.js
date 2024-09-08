import * as React from 'react';
import {View, Dimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';
//const {width, height} = Dimensions.get('window');
const SplashScreenSVG = props => {
  const originalWidth = 393;
  const originalHeight = 852;
  const aspectRatio = originalWidth / originalHeight;
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={{backgroundColor:"#FEBE14"}}>
      <Svg
      style={{width: "100%", aspectRatio}}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        width="100%"
        height="100%"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}>
        <Path fill="#FEBE14" d="M0 0h393v852H0z" />
        <Path
          fill="#090E12"
          d="M109.181 86.176v-6.085h28.671v6.085h-10.688V115h-7.295V86.176h-10.688Zm37.159 29.318c-1.67 0-3.159-.289-4.466-.869-1.307-.591-2.341-1.46-3.102-2.608-.75-1.159-1.125-2.602-1.125-4.329 0-1.455.267-2.677.801-3.665a6.495 6.495 0 0 1 2.182-2.387c.92-.602 1.966-1.056 3.136-1.363a23.888 23.888 0 0 1 3.716-.648c1.523-.16 2.75-.307 3.682-.443.932-.148 1.608-.364 2.028-.648.421-.284.631-.705.631-1.261v-.102c0-1.08-.341-1.915-1.023-2.506-.67-.591-1.625-.887-2.863-.887-1.307 0-2.347.29-3.12.87-.772.568-1.284 1.284-1.534 2.148l-6.716-.546c.341-1.59 1.012-2.966 2.012-4.125 1-1.17 2.29-2.068 3.869-2.693 1.591-.636 3.432-.955 5.523-.955 1.454 0 2.846.17 4.176.512 1.341.34 2.528.869 3.563 1.585a7.704 7.704 0 0 1 2.471 2.761c.602 1.114.904 2.45.904 4.006V115h-6.887v-3.631h-.204a7.383 7.383 0 0 1-1.688 2.165c-.704.614-1.551 1.097-2.54 1.449-.988.341-2.13.511-3.426.511Zm2.08-5.011c1.068 0 2.011-.21 2.829-.631.818-.432 1.461-1.011 1.926-1.738.466-.728.699-1.552.699-2.472v-2.778c-.227.147-.539.284-.937.409a17.81 17.81 0 0 1-1.313.324c-.488.09-.977.176-1.466.255-.488.068-.931.131-1.329.188-.852.125-1.597.324-2.233.596-.636.273-1.131.642-1.483 1.108-.352.455-.528 1.023-.528 1.705 0 .989.357 1.744 1.073 2.267.728.511 1.648.767 2.762.767Zm24.878-3.017.017-8.71h1.056l8.387-9.938h8.335l-11.267 13.159h-1.722l-4.806 5.489Zm-6.58 7.534V80.09h7.261V115h-7.261Zm16.364 0-7.705-11.403 4.841-5.131L191.587 115h-8.505Zm22.427.511c-2.693 0-5.011-.545-6.954-1.636-1.932-1.102-3.421-2.659-4.466-4.67-1.046-2.023-1.568-4.415-1.568-7.177 0-2.693.522-5.056 1.568-7.09 1.045-2.035 2.517-3.62 4.415-4.756 1.909-1.136 4.147-1.705 6.715-1.705 1.728 0 3.336.279 4.824.835 1.5.546 2.807 1.37 3.921 2.472 1.125 1.102 2 2.489 2.625 4.16.625 1.658.937 3.602.937 5.829v1.994h-22.108v-4.5h15.273c0-1.045-.227-1.971-.682-2.778a4.879 4.879 0 0 0-1.892-1.892c-.795-.466-1.721-.7-2.778-.7-1.102 0-2.08.256-2.932.768-.841.5-1.5 1.176-1.977 2.028-.478.841-.722 1.779-.733 2.813v4.278c0 1.296.238 2.415.716 3.358a5.242 5.242 0 0 0 2.062 2.182c.887.511 1.938.767 3.154.767a6.87 6.87 0 0 0 2.215-.341 4.585 4.585 0 0 0 1.722-1.023 4.445 4.445 0 0 0 1.091-1.67l6.716.443c-.341 1.614-1.04 3.023-2.097 4.227-1.045 1.193-2.397 2.125-4.057 2.796-1.647.659-3.551.988-5.71.988Zm28.002-35.42h9.102l9.614 23.454h.409l9.613-23.454h9.103V115h-7.16V92.278h-.289l-9.034 22.552h-4.875l-9.034-22.637h-.29V115h-7.159V80.09Zm48.268 44.727c-.92 0-1.784-.074-2.591-.221-.795-.137-1.454-.313-1.977-.529l1.636-5.42c.853.261 1.62.403 2.301.426.694.023 1.29-.136 1.79-.477.512-.341.926-.921 1.245-1.739l.426-1.108-9.392-26.932h7.636l5.42 19.227h.273l5.472-19.227h7.687l-10.176 29.012c-.489 1.409-1.153 2.636-1.994 3.681a8.175 8.175 0 0 1-3.154 2.438c-1.272.579-2.806.869-4.602.869ZM155.136 173v-34.909h13.772c2.648 0 4.904.506 6.767 1.517 1.864 1 3.285 2.392 4.262 4.176.988 1.773 1.483 3.818 1.483 6.136 0 2.319-.5 4.364-1.5 6.137-1 1.773-2.449 3.153-4.347 4.142-1.886.988-4.17 1.483-6.852 1.483h-8.779v-5.915h7.586c1.42 0 2.591-.244 3.511-.733.932-.5 1.625-1.187 2.08-2.062.466-.887.698-1.904.698-3.052 0-1.159-.232-2.17-.698-3.034-.455-.875-1.148-1.551-2.08-2.028-.932-.489-2.114-.733-3.545-.733h-4.978V173h-7.38Zm37.704.494c-1.67 0-3.159-.289-4.466-.869-1.307-.591-2.341-1.46-3.102-2.608-.75-1.159-1.125-2.602-1.125-4.329 0-1.455.267-2.677.801-3.665a6.495 6.495 0 0 1 2.182-2.387c.92-.602 1.966-1.056 3.136-1.363a23.9 23.9 0 0 1 3.716-.648 94.63 94.63 0 0 0 3.682-.443c.932-.148 1.608-.364 2.028-.648.421-.284.631-.704.631-1.261v-.103c0-1.079-.341-1.914-1.023-2.505-.67-.591-1.625-.887-2.863-.887-1.307 0-2.347.29-3.12.87-.772.568-1.284 1.284-1.534 2.147l-6.716-.545c.341-1.591 1.012-2.966 2.012-4.125 1-1.17 2.29-2.068 3.869-2.693 1.591-.637 3.432-.955 5.523-.955 1.454 0 2.846.171 4.176.512 1.341.341 2.528.869 3.563 1.585a7.704 7.704 0 0 1 2.471 2.761c.602 1.114.904 2.449.904 4.006V173h-6.887v-3.631h-.204a7.383 7.383 0 0 1-1.688 2.165c-.704.614-1.551 1.097-2.54 1.449-.988.341-2.13.511-3.426.511Zm2.08-5.011c1.068 0 2.011-.21 2.829-.631.818-.432 1.461-1.011 1.926-1.738.466-.728.699-1.552.699-2.472v-2.778c-.227.147-.539.284-.937.409a17.81 17.81 0 0 1-1.313.324c-.488.09-.977.176-1.466.255-.488.068-.931.131-1.329.188-.852.125-1.597.324-2.233.596-.636.273-1.131.642-1.483 1.108-.352.455-.528 1.023-.528 1.705 0 .989.357 1.744 1.073 2.267.728.511 1.648.767 2.762.767ZM213.218 173v-26.182h7.04v4.568h.273c.477-1.625 1.278-2.852 2.403-3.681 1.125-.841 2.42-1.262 3.886-1.262.364 0 .756.023 1.176.068.421.046.79.108 1.108.188v6.443c-.341-.102-.812-.193-1.414-.273a12.82 12.82 0 0 0-1.654-.119c-1.068 0-2.023.233-2.863.699a5.144 5.144 0 0 0-1.978 1.909c-.477.818-.716 1.761-.716 2.83V173h-7.261Zm26.22-7.534.017-8.71h1.057l8.386-9.938h8.336l-11.267 13.159h-1.722l-4.807 5.489ZM232.859 173v-34.909h7.261V173h-7.261Zm16.363 0-7.704-11.403 4.841-5.131L257.728 173h-8.506ZM75.803 767h-3.955l6.026-17.455h4.756L88.647 767h-3.955l-4.372-13.466h-.136L75.803 767Zm-.247-6.861h9.34v2.881h-9.34v-2.881Zm18.754-10.594V767h-3.63v-17.455h3.63ZM99.8 767l-3.562-13.091h3.674l2.028 8.796h.119l2.114-8.796h3.605l2.148 8.744h.111l1.994-8.744h3.665L112.142 767h-3.844l-2.25-8.233h-.162l-2.25 8.233h-3.835Zm21.565.247c-.835 0-1.579-.145-2.233-.435a3.6 3.6 0 0 1-1.551-1.303c-.375-.58-.562-1.302-.562-2.165 0-.728.133-1.338.4-1.833a3.246 3.246 0 0 1 1.091-1.193 5.32 5.32 0 0 1 1.568-.682 12.08 12.08 0 0 1 1.858-.324 46.384 46.384 0 0 0 1.841-.221c.466-.074.804-.182 1.015-.324.21-.142.315-.352.315-.631v-.051c0-.54-.171-.957-.511-1.253-.336-.295-.813-.443-1.432-.443-.654 0-1.174.145-1.56.435a2.001 2.001 0 0 0-.767 1.074l-3.358-.273a4.575 4.575 0 0 1 1.006-2.063c.5-.585 1.145-1.034 1.934-1.346.796-.318 1.716-.477 2.762-.477a8.4 8.4 0 0 1 2.088.255c.67.171 1.264.435 1.781.793.523.358.935.818 1.236 1.381.301.556.452 1.224.452 2.002V767h-3.444v-1.815h-.102c-.21.409-.491.77-.844 1.082a3.89 3.89 0 0 1-1.27.724c-.494.171-1.065.256-1.713.256Zm1.04-2.506c.534 0 1.006-.105 1.415-.315.409-.216.73-.506.963-.869.233-.364.349-.776.349-1.236v-1.389a1.901 1.901 0 0 1-.468.204 8.33 8.33 0 0 1-.657.162c-.244.046-.488.088-.732.128l-.665.094a4.49 4.49 0 0 0-1.117.298 1.79 1.79 0 0 0-.741.554c-.176.227-.264.512-.264.852 0 .495.179.873.537 1.134.363.256.823.383 1.38.383Zm10.922 7.168c-.46 0-.892-.037-1.295-.111a4.698 4.698 0 0 1-.989-.264l.818-2.71c.426.131.81.202 1.151.213.346.011.645-.068.895-.239.255-.17.463-.46.622-.869l.213-.554-4.696-13.466h3.818l2.71 9.614h.137l2.735-9.614h3.844l-5.088 14.506a6.105 6.105 0 0 1-.997 1.841c-.415.528-.94.934-1.577 1.218-.636.29-1.403.435-2.301.435Zm22.713-14.267-3.324.205a1.718 1.718 0 0 0-.366-.767 1.946 1.946 0 0 0-.742-.554c-.301-.142-.662-.214-1.082-.214-.563 0-1.037.12-1.423.358-.387.233-.58.546-.58.938 0 .312.125.577.375.793.25.215.679.389 1.287.519l2.369.478c1.273.261 2.222.682 2.847 1.261.625.58.937 1.341.937 2.284 0 .858-.252 1.611-.758 2.259-.5.647-1.188 1.153-2.063 1.517-.869.358-1.872.537-3.008.537-1.733 0-3.114-.361-4.142-1.083-1.023-.727-1.622-1.716-1.798-2.966l3.571-.187c.108.528.369.932.784 1.21.414.273.946.409 1.593.409.637 0 1.148-.122 1.534-.366.393-.25.591-.571.597-.963-.006-.33-.145-.6-.418-.81-.272-.216-.693-.381-1.261-.494l-2.267-.452c-1.278-.256-2.23-.699-2.855-1.33-.619-.63-.929-1.434-.929-2.412 0-.84.227-1.565.682-2.173.46-.608 1.105-1.077 1.934-1.406.836-.33 1.813-.494 2.932-.494 1.654 0 2.955.349 3.904 1.048.954.699 1.511 1.65 1.67 2.855Zm15.102-3.733v2.727h-7.883v-2.727h7.883Zm-6.093-3.136h3.63v12.204c0 .335.051.597.154.784.102.182.244.31.426.384.187.074.403.111.648.111.17 0 .341-.015.511-.043l.392-.077.571 2.702c-.182.057-.437.122-.767.196-.33.08-.73.128-1.202.145-.875.034-1.642-.082-2.301-.349-.653-.268-1.162-.682-1.525-1.245-.364-.562-.543-1.273-.537-2.13v-12.682Zm12.37 8.659V767h-3.63v-17.455h3.528v6.674h.154c.295-.773.772-1.378 1.431-1.816.659-.443 1.486-.664 2.48-.664.91 0 1.702.199 2.378.596a3.988 3.988 0 0 1 1.586 1.696c.38.733.568 1.611.562 2.634V767h-3.631v-7.688c.006-.806-.199-1.434-.613-1.883-.409-.449-.983-.673-1.722-.673a2.67 2.67 0 0 0-1.312.315c-.375.21-.671.517-.887.92-.21.398-.318.878-.324 1.441Zm17.312 7.824c-1.346 0-2.506-.273-3.477-.818a5.61 5.61 0 0 1-2.233-2.336c-.523-1.011-.784-2.207-.784-3.588 0-1.346.261-2.528.784-3.545s1.258-1.81 2.207-2.378c.955-.568 2.074-.852 3.358-.852.864 0 1.668.139 2.412.417.75.273 1.404.685 1.96 1.236.563.551 1 1.244 1.313 2.08.312.829.469 1.801.469 2.914v.998h-11.054v-2.25h7.636c0-.523-.114-.986-.341-1.39a2.444 2.444 0 0 0-.946-.946c-.398-.233-.861-.349-1.389-.349a2.8 2.8 0 0 0-1.466.383c-.42.25-.75.588-.989 1.015-.238.42-.36.889-.366 1.406v2.139c0 .648.119 1.207.358 1.679.244.472.588.835 1.031 1.091.443.256.969.383 1.577.383.403 0 .773-.056 1.108-.17.335-.114.622-.284.861-.511.238-.228.42-.506.545-.836l3.358.222a4.588 4.588 0 0 1-1.048 2.114c-.523.596-1.199 1.062-2.029 1.397-.824.33-1.775.495-2.855.495Zm8.378-.256v-13.091h3.52v2.284h.136c.239-.812.639-1.426 1.202-1.841a3.16 3.16 0 0 1 1.943-.63 5.414 5.414 0 0 1 1.142.127v3.222a4.655 4.655 0 0 0-.707-.136 6.322 6.322 0 0 0-.827-.06c-.534 0-1.011.116-1.432.349a2.581 2.581 0 0 0-.988.955c-.239.409-.358.881-.358 1.415V767h-3.631Zm15.177.256c-1.347 0-2.506-.273-3.477-.818a5.604 5.604 0 0 1-2.233-2.336c-.523-1.011-.784-2.207-.784-3.588 0-1.346.261-2.528.784-3.545a5.789 5.789 0 0 1 2.207-2.378c.955-.568 2.074-.852 3.358-.852.864 0 1.668.139 2.412.417.75.273 1.403.685 1.96 1.236.563.551 1 1.244 1.313 2.08.312.829.468 1.801.468 2.914v.998H213.24v-2.25h7.637c0-.523-.114-.986-.341-1.39a2.45 2.45 0 0 0-.946-.946c-.398-.233-.861-.349-1.389-.349a2.8 2.8 0 0 0-1.466.383c-.421.25-.75.588-.989 1.015a2.85 2.85 0 0 0-.366 1.406v2.139c0 .648.119 1.207.358 1.679.244.472.588.835 1.031 1.091.443.256.969.383 1.577.383.403 0 .772-.056 1.107-.17.336-.114.623-.284.861-.511.239-.228.421-.506.546-.836l3.358.222a4.59 4.59 0 0 1-1.049 2.114c-.522.596-1.198 1.062-2.028 1.397-.824.33-1.776.495-2.855.495Zm20.972-13.347v2.727h-8.079v-2.727h8.079ZM233.028 767v-14.037c0-.949.185-1.736.554-2.361a3.56 3.56 0 0 1 1.534-1.406c.648-.312 1.384-.469 2.208-.469a8.42 8.42 0 0 1 1.525.128c.466.085.813.162 1.04.23l-.648 2.727a4.49 4.49 0 0 0-.528-.127 3.285 3.285 0 0 0-.631-.06c-.534 0-.906.125-1.116.375-.211.244-.316.588-.316 1.031V767h-3.622Zm13.894.256c-1.324 0-2.469-.282-3.434-.844a5.772 5.772 0 0 1-2.225-2.369c-.523-1.017-.784-2.196-.784-3.537 0-1.353.261-2.534.784-3.546a5.7 5.7 0 0 1 2.225-2.369c.965-.568 2.11-.852 3.434-.852 1.324 0 2.466.284 3.426.852a5.68 5.68 0 0 1 2.233 2.369c.523 1.012.784 2.193.784 3.546 0 1.341-.261 2.52-.784 3.537a5.752 5.752 0 0 1-2.233 2.369c-.96.562-2.102.844-3.426.844Zm.017-2.813c.603 0 1.105-.17 1.509-.511.403-.347.707-.818.912-1.415.21-.597.315-1.276.315-2.037 0-.761-.105-1.44-.315-2.037-.205-.596-.509-1.068-.912-1.415-.404-.346-.906-.519-1.509-.519-.608 0-1.119.173-1.534.519-.409.347-.719.819-.929 1.415-.204.597-.307 1.276-.307 2.037 0 .761.103 1.44.307 2.037.21.597.52 1.068.929 1.415.415.341.926.511 1.534.511Zm8.787 2.557v-13.091h3.52v2.284h.136c.239-.812.64-1.426 1.202-1.841.563-.42 1.21-.63 1.943-.63a5.414 5.414 0 0 1 1.142.127v3.222a4.655 4.655 0 0 0-.707-.136 6.322 6.322 0 0 0-.827-.06c-.534 0-1.011.116-1.432.349a2.581 2.581 0 0 0-.988.955c-.239.409-.358.881-.358 1.415V767h-3.631Zm17.617 4.909c-.461 0-.892-.037-1.296-.111a4.704 4.704 0 0 1-.988-.264l.818-2.71c.426.131.809.202 1.15.213.347.011.645-.068.895-.239.256-.17.463-.46.622-.869l.213-.554-4.696-13.466h3.819l2.71 9.614h.136l2.736-9.614h3.844l-5.088 14.506a6.127 6.127 0 0 1-.997 1.841 4.094 4.094 0 0 1-1.577 1.218c-.637.29-1.404.435-2.301.435Zm17.314-4.653c-1.324 0-2.469-.282-3.435-.844a5.77 5.77 0 0 1-2.224-2.369c-.523-1.017-.785-2.196-.785-3.537 0-1.353.262-2.534.785-3.546a5.698 5.698 0 0 1 2.224-2.369c.966-.568 2.111-.852 3.435-.852 1.323 0 2.466.284 3.426.852a5.687 5.687 0 0 1 2.233 2.369c.522 1.012.784 2.193.784 3.546 0 1.341-.262 2.52-.784 3.537a5.759 5.759 0 0 1-2.233 2.369c-.96.562-2.103.844-3.426.844Zm.017-2.813c.602 0 1.105-.17 1.508-.511.404-.347.708-.818.912-1.415.21-.597.315-1.276.315-2.037 0-.761-.105-1.44-.315-2.037-.204-.596-.508-1.068-.912-1.415-.403-.346-.906-.519-1.508-.519-.608 0-1.12.173-1.534.519-.41.347-.719.819-.929 1.415-.205.597-.307 1.276-.307 2.037 0 .761.102 1.44.307 2.037.21.597.519 1.068.929 1.415.414.341.926.511 1.534.511Zm17.181-3.017v-7.517h3.631V767H308v-2.378h-.136a3.867 3.867 0 0 1-1.474 1.85c-.682.465-1.515.698-2.498.698-.875 0-1.644-.198-2.309-.596-.665-.398-1.185-.963-1.56-1.696-.369-.733-.557-1.611-.562-2.634v-8.335h3.63v7.688c.006.772.213 1.383.622 1.832.41.449.958.673 1.645.673.438 0 .847-.099 1.228-.298.38-.205.687-.506.92-.903.239-.398.355-.89.349-1.475Zm10.873-11.881-.332 12.222h-3.119l-.341-12.222h3.792Zm-1.892 17.677a1.992 1.992 0 0 1-1.449-.597 1.946 1.946 0 0 1-.596-1.449 1.91 1.91 0 0 1 .596-1.432 1.995 1.995 0 0 1 1.449-.596c.54 0 1.014.199 1.424.596.409.398.616.875.622 1.432a1.976 1.976 0 0 1-.299 1.031 2.2 2.2 0 0 1-.741.742 1.936 1.936 0 0 1-1.006.273Z"
        />
        <Path
          fill="#fff"
          d="M176.221 498.497c.244-9.886 8.472-17.738 18.351-17.494 9.88.24 17.719 8.486 17.475 18.367-.24 9.891-8.477 17.743-18.352 17.499-9.879-.245-17.723-8.487-17.479-18.377l.005.005ZM315.213 465.069l-4.598-.113a1.503 1.503 0 0 1-1.463-1.536l.427-17.494c.028-1.239 1.468-1.911 2.439-1.136 2.96 2.357 5.001 7.683 4.855 13.657l-.126 5.161a1.503 1.503 0 0 1-1.534 1.465v-.004Z"
        />
        <Path
          fill="#fff"
          d="M150.669 534.513c-5.907-1.076-14.641-1.893-24.863 0a67.68 67.68 0 0 0-12.347 3.527 1.166 1.166 0 0 1-1.581-1.179c1.065-13.864 2.125-27.727 3.19-41.586l6.586-161.388.821-34.617v-.112c-.263-3.414-.582-13.577 6.15-22.937.784-1.085 4.748-6.462 12.197-10.332 6.066-3.151 11.09-3.564 23.924-4.227 21.148-1.094 29.479-1.249 29.479-1.249 15.396-.286 23.094-.413 29.896-.413 17.456 0 30.375 1.273 38.758 3.818 8.383 2.545 15.804 6.81 22.269 12.798 6.464 5.983 11.549 13.384 15.26 22.185 3.71 8.805 5.568 18.508 5.568 29.098 0 17.334-4.4 32.916-13.191 46.747-8.796 13.826-20.791 24.148-35.976 30.958-15.19 6.81-32.129 10.214-50.814 10.214-9.607 0-20.256-1.037-31.937-3.113a1.172 1.172 0 0 1-.966-1.221 38.2 38.2 0 0 0-1.304-12.69 38.195 38.195 0 0 0-4.283-9.815c-.53-.859.202-1.939 1.191-1.761 9.777 1.733 19.323 2.597 28.639 2.597 9.894 0 19.342-1.136 28.344-3.405 9.002-2.268 16.728-6.053 23.193-11.351 6.459-5.292 11.474-11.933 15.049-19.917 3.574-7.979 5.362-16.441 5.362-25.383 0-7.016-1.309-13.516-3.918-19.504-2.612-5.983-6.22-10.731-10.822-14.239-4.606-3.508-9.828-5.88-15.668-7.12-5.845-1.24-14.327-1.859-25.459-1.859h-17.314l-21.645.413-14.96-.193a1.176 1.176 0 0 0-1.182 1.109c-1.609 29.69-2.758 56.698-3.429 81.015l-2.871 84.825-1.436 64.598"
        />
        <Path
          fill="#fff"
          d="m305.329 446.255-.385 15.733a2.826 2.826 0 0 1-2.894 2.761l-4.072-.098-33.963-.836-55.51-1.362c-2.322-.057-3.589-2.738-2.158-4.575l12.066-15.441a2.82 2.82 0 0 1 2.293-1.085l81.869 2.006a2.827 2.827 0 0 1 2.759 2.897h-.005ZM305.409 504.278c-1.436.671-3.087-.46-2.998-2.043.014-.216.019-.432.023-.653.301-12.224-9.391-22.415-21.611-22.716-12.211-.296-22.396 9.407-22.691 21.636-.019.756 0 1.508.056 2.245.099 1.249-.929 2.301-2.181 2.268l-37.829-.93c-1.253-.032-2.224-1.131-2.064-2.371.094-.738.15-1.48.169-2.236.3-12.229-9.396-22.415-21.612-22.72-12.216-.301-22.395 9.406-22.695 21.635v.038c-.038 1.677-1.858 2.691-3.275 1.794-5.334-3.372-8.819-9.374-8.655-16.132.249-10.238 8.772-18.358 18.994-18.104l84.862 2.076 31.937.784 18.623.456a2.134 2.134 0 0 1 2.079 2.188l-.343 14.019-.014.568-.061 2.404h-.023c-.385 7.035-4.677 12.99-10.705 15.799l.014-.005Z"
        />
        <Path
          fill="#fff"
          d="M280.143 519.597c-9.88-.239-17.719-8.486-17.479-18.376.239-9.891 8.476-17.734 18.356-17.494 9.879.239 17.718 8.486 17.474 18.372-.244 9.886-8.472 17.742-18.351 17.494v.004Z"
        />
        <Path
          fill="#FFB627"
          d="M237.43 472.052h-11.469a2.583 2.583 0 0 0 0 5.166h11.469a2.582 2.582 0 0 0 2.58-2.583 2.581 2.581 0 0 0-2.58-2.583Z"
        />
        <Path
          fill="#fff"
          d="M270.798 555.106c.169-.202 8.866-11.9 20.115-20.636-1.327-.685-3.072-1.225-5.31-1.225-2.496 0-5.278.667-8.275 1.982-5.644 2.474-9.767 7.354-14.988 13.53-2.965 3.503-6.324 7.476-10.447 11.538-5.484 5.415-13.623 10.309-24.178 14.549a151.103 151.103 0 0 1-10.672 3.819c.07.004.14.014.211.023 3.513.409 7.046.775 10.531 1.104.169.014.338.033.502.047 4.87-1.607 8.702-3.072 11.353-4.344 7.698-3.701 20.687-12.46 31.158-20.382v-.005ZM304.339 549.729c7.599-6.265 15.968-13.15 24.637-16.799-5.099-3.301-10.644-3.672-17.685-1.362-6.685 2.193-10.757 5.476-28.892 20.612-10.949 9.139-30.333 22.773-40.644 27.727a45.55 45.55 0 0 1-1.829.836c.638.038 1.262.08 1.876.113.497.028 1.009.061 1.497.089 1.318.07 2.598.131 3.804.178 1.337.047 2.702.057 4.095.024.451-.014.92-.047 1.375-.066.952-.037 1.909-.07 2.89-.145.558-.043 1.139-.113 1.702-.169.91-.09 1.811-.16 2.74-.278.61-.075 1.252-.183 1.876-.272.831-.117 1.661-.23 2.505-.371 9.186-5.79 28.321-20.687 35.024-26.022 1.614-1.287 3.289-2.668 5.02-4.091l.009-.004ZM307.454 553.519c-1.75 1.441-3.448 2.841-5.085 4.142-.183.145-13.801 10.975-25.342 19.353.427-.113.859-.23 1.286-.347a182.324 182.324 0 0 0 7.069-2.147c.15-.051.296-.098.446-.15.887-.291 1.759-.587 2.618-.883.178-.061.351-.122.525-.178.915-.32 1.82-.644 2.707-.963l.164-.056c1.975-.719 3.87-1.442 5.662-2.151l.169-.071c.83-.328 1.637-.652 2.421-.972.07-.028.14-.061.211-.089a298.727 298.727 0 0 0 8.509-3.63l.202-.089c.544-.24 1.055-.47 1.525-.677 4.536-2.019 9.574-5.847 15.4-10.28 6.68-5.081 14.149-10.759 22.686-15.019-2.42-2.573-6.028-3.884-10.803-3.884-10.072 1.353-20.857 10.243-30.375 18.086l.005.005Z"
        />
        <Path
          fill="#fff"
          d="M357.869 541.374a9.39 9.39 0 0 0-3.753.78c-9.495 4.132-17.845 10.482-25.21 16.084-6.07 4.617-11.315 8.609-16.376 10.858-8.168 3.63-27.303 12.135-46.944 15.517-5.7.962-11.08 1.451-15.992 1.451-.891 0-1.783-.014-2.674-.047-5.268-.197-11.69-.629-18.577-1.254a467.373 467.373 0 0 1-23.882-2.799c-31.594-4.541-34.606-8.693-35.601-10.059-1.435-1.978-1.003-3.541-.619-4.307 1.187-2.339 4.443-2.653 7.473-2.653 6.962 0 17.629 2.118 18.08 2.212l.262.07c.089.024 9.021 2.841 18.46 2.841 4.878 0 9.016-.742 12.304-2.207a18.278 18.278 0 0 0 2.369-1.273c2.871-1.85 6.155-4.748 5.419-7.997-.545-2.381-3.017-4.1-3.955-4.218-1.623-.202-6.896-1.418-16.076-3.55-10.128-2.348-22.738-5.269-30.816-6.786-2.618-.489-5.418-1.104-8.383-1.747-9.382-2.053-20.022-4.373-31.552-4.373-5.367 0-10.353.494-15.251 1.513l-3.082.638c-20.627 4.241-40.113 8.252-55.313 34.335-2.237 3.842-3.959 7.89-5.779 12.178-2.983 7.016-6.07 14.272-11.63 20.715-3.25 3.766-8.556 8.425-14.17 13.356-7.216 6.331-18.02 15.822-18.601 19.527 1.792 1.804 13.28 7.604 34.198 4.927 54.327-6.946 65.731-22.477 111.301-22.439 4.437 0 9.105.225 13.885.225 35.301 0 122.076-4.513 165.365-46.286 7.745-7.477 22.504-23.834 27.251-29.127-2.313-2.226-7.065-6.114-12.15-6.114l.019.009Z"
        />
      </Svg>
    </View>
  );
};
export default SplashScreenSVG;
