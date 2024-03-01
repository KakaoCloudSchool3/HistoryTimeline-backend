package kakao.school.what.service;

import kakao.school.what.domain.History;
import kakao.school.what.dto.HistoryResponseTimelineDto;
import kakao.school.what.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class HistoryService {
    @Autowired
    private HistoryRepository historyRepository;

    // 국가 id에 따라 history를 page로 불러옴
    // 예시 용으로 추후 삭제하겠습니다.
    public Page<History> listHistoryByCountryId(Long countryId, Pageable pageable) {
        return historyRepository.findAllByCountryId(countryId, pageable);
    }

    // 한국 역사만 History Response Timeline Dto로 반환하는 메소드
    public Page<HistoryResponseTimelineDto> listKoreaHistoryDtoByYear(Integer year, Pageable pageable) {
        return historyEntityToTimelineDto(historyRepository.findAllByCountryIdAndYearGreaterThanEqual(410L, year, pageable));
    }

    // History Entity Page를 History Response Timeline Dto로 변경하는 메소드
    private Page<HistoryResponseTimelineDto> historyEntityToTimelineDto(Page<History> entityPage) {
        Page<HistoryResponseTimelineDto> dtoPage = entityPage
                .map(entity ->
                        new HistoryResponseTimelineDto(
                                entity.getHistoryId(),
                                entity.getTitle(),
                                entity.getPriority(),
                                entity.getCountryId(),
                                entity.getBrief(),
                                entity.getYear(),
                                entity.getMonth(),
                                entity.getDay(),
                                entity.getImgUrl()
                        ));
        return dtoPage;
    }
}
