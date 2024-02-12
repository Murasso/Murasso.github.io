import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LineGradient from '../components/LineGradient';

const MyTimeline = () => {
  return (
    <div id="about" className="pt-48 pb-48">
      <div className="md:w-2/5 mx-auto mb-10 text-center">
        <p className="font-playfair font-semibold text-4xl">
          About
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-2/3" />
        </div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#2CBCE9", color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #2CBCE9' }}
          date="Present"
        >
          <p className="text-black vertical-timeline-element-title">Senior studying math at Osaka University (from 2019)</p>
          <h3 className="vertical-timeline-element-subtitle">Specializing in Martingale theory and Probability theory</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#2CBCE9", color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #2CBCE9' }}
          date="Present"
        >
          <p className="text-black vertical-timeline-element-title">Internship at DMM Web Camp (from 2023, Sep)</p>
          <h3>Serving as a Ruby on Rails mentor</h3>
          <h3>Gained valuable teaching experience and deepened my understanding of Ruby on Rails</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#2CBCE9", color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #2CBCE9' }}
          date="Present"
        >
          <p className="text-black vertical-timeline-element-title">Research Assistant at Osaka University (from 2022, May)</p>
          <h3>Creating image classification models</h3>
          <h3>Made visualizations showcasing the learning progress</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#2CBCE9", color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #2CBCE9' }}
          date="2022, Aug - Sep"
        >
          <p className="text-black vertical-timeline-element-title">Internship at DIMAAG-AI</p>
          <h3>AI engineer working on a face recognition app</h3>
          <h3>Developed a Desktop application visualizing emotions</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#2CBCE9", color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #2CBCE9' }}
          date="2022, Sep - Oct"
        >
          <p className="text-black vertical-timeline-element-title">Internship at Kuzen</p>
          <h3>Worked on a language model for a chat bot</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default MyTimeline;
