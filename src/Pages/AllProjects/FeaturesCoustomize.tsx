const FeaturesCoustomize = ({ description }: { description: string }) => {
  // ডেসক্রিপশনকে বাক্য ধরে আলাদা করা
  const sentences = description.split(". ").map((sentence, index) => {
    // প্রতিটি বাক্যের শেষে পিরিয়ড যোগ করা
    const formattedSentence =
      index !== description.split(". ").length - 1 ? `${sentence}.` : sentence;

    return formattedSentence;
  });

  return (
    <div>
      {sentences.map((sentence, index) => (
        <p key={index}>
          {sentence.slice(0, 80)}{" "}
          {/* ক্যারেক্টর স্লাইস করতে চাইলে এখানে সংখ্যা পরিবর্তন করুন */}
        </p>
      ))}
    </div>
  );
};

export default FeaturesCoustomize;
