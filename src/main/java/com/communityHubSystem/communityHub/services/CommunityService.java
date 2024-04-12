package com.communityHubSystem.communityHub.services;

import com.communityHubSystem.communityHub.models.Community;
import com.communityHubSystem.communityHub.models.User;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;

@Service
public interface CommunityService {
    public void createCommunity(Community community, Long id);

    public List<User> getAll();

    public List<Community> getAllCommunity(Model model);

    public Community getCommunityBy(Long id);

   public void createGroup(Community community,List<Long> id);

    public List<String> getOwnerNamesByCommunityId(Long communityId);
    public void kickGroup(Community community,List<Long> id);

    public Community getCommunityById(Long communityId);
    public List<Community> findAll();

    public List<Community> findAllByIsActive();

}
