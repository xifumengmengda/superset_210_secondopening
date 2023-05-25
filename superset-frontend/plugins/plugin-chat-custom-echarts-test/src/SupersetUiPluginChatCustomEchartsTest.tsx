import React, { useEffect, createRef , useState } from 'react';
// import { Button } from "antd";
// import ReactEcharts from "echarts-for-react"

import { styled , useTheme } from '@superset-ui/core';
import { SupersetUiPluginChatCustomEchartsTestProps, SupersetUiPluginChatCustomEchartsTestStylesProps } from './types';
import Icons from 'src/components/Icons';
import TimeSwich from 'src/dashboard/containers/TimeSwich'
// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled

// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/core. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-core/src/style/index.ts

// background-color: ${({ theme }) => theme.colors.secondary.light2};
const Styles = styled.div<SupersetUiPluginChatCustomEchartsTestStylesProps>`
  border: 1px solid #333;
  padding: ${({ theme }) => theme.gridUnit * 2 }px;
  border-radius: 2px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  overflow: scroll;

  .title-span{
    font-size: ${({ theme, headerFontSize }) =>
      theme.typography.sizes[headerFontSize]}px;
    font-weight: ${({ theme, boldText }) =>
      theme.typography.weights[boldText ? 'bold' : 'normal']};
  }
  .num{
    font-size:18px;
  }
  .text-line{
    padding:5px 0px;
  }
  .show-info-box{
    width:${({ width }) => width}px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .single-box{
    width:${({ width }) => width / 5}px;
    height:${({ width }) => width / 5}px;
    border: 1px solid #eee;
  }
`;

/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */

export default function SupersetUiPluginChatCustomEchartsTest(props: SupersetUiPluginChatCustomEchartsTestProps) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉
  const { 
    data, height, width , headerText , total ,
    boldText,
    // onChangeFilter,
    // setDataMask,
    onContextMenu=()=>{},
  } = props;
  const theme = useTheme();

  const rootElem = createRef<HTMLDivElement>();

  // Often, you just want to access the DOM and do whatever you want.
  // Here, you can do that with createRef, and the useEffect hook.
  // useEffect(() => {
  //   const root = rootElem.current as HTMLElement;
  //   console.log('Plugin element', root);
  // });

  console.log('测试测试Plugin props', props);

  const xData: any[] = [];
  const yData: any[] = [];
  if (Array.isArray(data)) {
    data.forEach(e=>{
      xData.push(e.name)
      yData.push(e.count)
    })
  }
  // const getOption = () => {
  //   return {
  //     xAxis: {
  //       data: xData,
  //     },
  //     yAxis: {},
  //     series: [
  //       {
  //         name: "销量",
  //         type: "bar",
  //         data: yData,
  //       },
  //     ],
  //   }
  // }

  return (
    <Styles
      ref={rootElem}
      boldText={boldText}
      headerFontSize={props.headerFontSize}
      height={height}
      width={width}
    >
      <TimeSwich />
      <span className='title-span' 
            onContextMenu={(e)=>{
              console.log("onContextMenu事件",e);
              onContextMenu(100,100,{
                drillToDetail:[],
                crossFilter:undefined,
                drillBy:undefined,
              })

            }}
      >{headerText}</span>
      {/* <Button type='primary'>第三方</Button> */}
      <span className='num'>{total}</span>
       {/* <ReactEcharts option={getOption()} /> */}
      <div className='text-line'>
        环比
        {/* 环比：（5月-4月）/4月. */}
        <Icons.ArrowUp
          iconSize="l"
          iconColor={theme.colors.grayscale.light1}
        />
        <span>23.8%</span>
      </div>

      <div className='text-line'>
        同比
        {/* 同比：（5月-上一年的5月）/上一年的5月. */}
        <Icons.ArrowDown
          iconSize="l"
          iconColor={"red"}
        />
        <span>66.8%</span>
      </div>
      {/* <div className='show-info-box'>
        {
          data.map(i=>{
            return(
              <div className='single-box'>
                {i.customer_name}
              </div>
            )
          })
        }
      </div> */}
      

    </Styles>
  );
}

